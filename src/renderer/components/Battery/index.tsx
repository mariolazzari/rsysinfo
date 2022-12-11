import { useEffect } from 'react';
// Mui
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import BatteryIcon from '@mui/icons-material/Battery80';
// Redux
import { BatteryArgs } from 'main/si/types';
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import { getBattery, onBattery, onError, selectBattery } from './reducer';

const Battery = () => {
  // Redux
  const { data, loading, error } = useAppSelector(selectBattery);
  const dispatch = useAppDispatch();

  const styles = {
    paper: {
      padding: 2,
      minWidth: 300,
      maxWidth: 800,
    },
    loading: {
      marginBottom: 2,
    },
    avatar: {
      backgroundColor: 'primary.main',
      marginX: 'auto',
      marginY: 2,
    },
    item: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  useEffect(() => {
    dispatch(getBattery());

    // subcribe cpu event
    window.api.ipcRenderer.on('battery', (e: string | BatteryArgs) => {
      if (typeof e === 'string') {
        dispatch(onError(e));
      } else {
        dispatch(onBattery(e as BatteryArgs));
      }
    });
  }, [dispatch]);

  return (
    <Paper sx={styles.paper} elevation={10}>
      {loading && <LinearProgress sx={styles.loading} color="info" />}

      <Avatar sx={styles.avatar}>
        <BatteryIcon />
      </Avatar>

      <Typography variant="h2" color="primary" align="center" gutterBottom>
        Battery
      </Typography>

      <Box sx={styles.item}>
        <Typography variant="h6">Battery present?</Typography>
        <Typography variant="h6">{data?.hasBattery ? 'Yes' : 'No'}</Typography>
      </Box>

      <Box sx={styles.item}>
        <Typography variant="h6">Manufactuer</Typography>
        <Typography variant="h6">{data?.manufacturer}</Typography>
      </Box>

      <Box sx={styles.item}>
        <Typography variant="h6">Charging?</Typography>
        <Typography variant="h6">{data?.isCharging ? 'Yes' : 'No'}</Typography>
      </Box>

      <Typography variant="h6" color="error">
        {error}
      </Typography>
    </Paper>
  );
};

export default Battery;
