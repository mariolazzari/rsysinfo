// Redux
import { useAppSelector } from 'renderer/redux/hooks';
import { selectTime } from 'renderer/components/General/reducer';
// Mui
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Time = () => {
  const time = useAppSelector(selectTime);

  const renderTime = (): string => {
    if (!time) {
      return 'not available';
    }

    const date = new Date(time.current);
    const dayStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString();

    return `${dayStr} ${timeStr}`;
  };

  return (
    <Paper elevation={10}>
      <Typography variant="h6">{`Current time: ${renderTime()}`}</Typography>
      <Typography variant="h6">{`Uptime: ${time?.uptime}`}</Typography>
    </Paper>
  );
};

export default Time;
