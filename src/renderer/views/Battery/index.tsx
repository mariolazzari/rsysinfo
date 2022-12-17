import { useEffect } from 'react';
import { on } from 'renderer/utils/ipc';
// Mui
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// Mui icons
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery90Icon from '@mui/icons-material/Battery90';
import Battery80Icon from '@mui/icons-material/Battery80';
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery50Icon from '@mui/icons-material/Battery50';
import Battery30Icon from '@mui/icons-material/Battery30';
import Battery20Icon from '@mui/icons-material/Battery20';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import Battery0Icon from '@mui/icons-material/Battery0Bar';

// Redux
import { BatteryArgs } from 'main/si/types';
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import { getBattery, onBattery, onError, selectBattery } from './reducer';

const Battery = () => {
  // Redux
  const { data, error } = useAppSelector(selectBattery);
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
    icon: {
      fontSize: 50,
    },
  };

  const renderIcon = () => {
    if (!data) {
      return <Battery0Icon color="error" />;
    }

    if (data?.percent === 100) {
      return <BatteryFullIcon color="primary" />;
    }

    if (data?.percent > 90) {
      return <Battery90Icon color="primary" />;
    }

    if (data?.percent > 80) {
      return <Battery80Icon color="primary" />;
    }

    if (data?.percent > 60) {
      return <Battery60Icon color="info" />;
    }

    if (data?.percent > 50) {
      return <Battery50Icon color="info" />;
    }

    if (data?.percent > 30) {
      return <Battery30Icon color="warning" />;
    }

    if (data?.percent > 20) {
      return <Battery20Icon color="warning" />;
    }

    return <BatteryAlertIcon color="warning" />;
  };

  useEffect(() => {
    dispatch(getBattery());

    const id = setInterval(() => {
      dispatch(getBattery());
    }, 60000);

    // subcribe cpu event
    on('battery', (e) => {
      if (typeof e === 'string') {
        dispatch(onError(e));
      } else {
        dispatch(onBattery(e as BatteryArgs));
      }
    });

    // cleanuo
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <Paper sx={styles.paper} elevation={10}>
      <Grid container>
        <Grid item container direction="column" alignItems="center">
          {renderIcon()}
          <Typography variant="h6" color="primary" align="center" gutterBottom>
            {data?.percent}%
          </Typography>
        </Grid>
      </Grid>

      <Grid item container justifyContent="space-between">
        <Typography>Battery present?</Typography>
        <Typography>{data?.hasBattery ? 'Yes' : 'No'}</Typography>
      </Grid>

      <Grid item container justifyContent="space-between">
        <Typography>Manufactuer</Typography>
        <Typography>{data?.manufacturer}</Typography>
      </Grid>

      <Grid item container justifyContent="space-between">
        <Typography>Charging?</Typography>
        <Typography>{data?.isCharging ? 'Yes' : 'No'}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default Battery;
