// Redux
import { useAppSelector } from 'renderer/redux/hooks';
import { selectTime } from 'renderer/components/General/reducer';
// Mui
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Mui icons
import TimeIcon from '@mui/icons-material/HourglassFull';
// utils
import { humanDuration } from '../../utils/dates';

const Time = () => {
  // Redux
  const time = useAppSelector(selectTime);

  // styles
  const styles = {
    paper: {
      padding: 2,
    },
    icon: {
      fontSize: 80,
      marginY: 3,
    },
  };

  const renderTime = (): string => {
    if (!time) {
      return 'not available';
    }

    const date = new Date(time.current);
    const dayStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString();

    return `${dayStr} ${timeStr}`;
  };

  const renderUptime = (): string => {
    if (!time?.uptime) {
      return 'not available';
    }
    return humanDuration(time.uptime);
  };

  return (
    <Paper sx={styles.paper} elevation={10}>
      <Grid container>
        <Grid item container justifyContent="center">
          <TimeIcon sx={styles.icon} color="primary" />
        </Grid>
        <Grid item container justifyContent="space-between">
          <Typography variant="h6">Current time</Typography>
          <Typography variant="h6">{renderTime()}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography variant="h6">Uptime</Typography>
          <Typography variant="h6">{renderUptime()}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography variant="h6">Timezone</Typography>
          <Typography variant="h6">{time?.timezone}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography variant="h6">Timezone name</Typography>
          <Typography variant="h6">{time?.timezoneName}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Time;
