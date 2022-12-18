// Redux
import { useAppSelector } from "renderer/redux/hooks";
import { selectTime } from "renderer/views/General/reducer";
// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Mui icons
import TimeIcon from "@mui/icons-material/AccessTime";
// component
import PaperBox from "renderer/components/PaperBox";
// utils
import { humanDuration } from "../../utils/dates";

const Time = () => {
  // Redux
  const time = useAppSelector(selectTime);

  // styles
  const styles = {
    icon: {
      fontSize: 50,
      marginBottom: 3,
    },
  };

  const renderTime = (): string => {
    if (!time) {
      return "not available";
    }

    const date = new Date(time.current);
    const dayStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString();

    return `${dayStr} ${timeStr}`;
  };

  const renderUptime = (): string => {
    if (!time?.uptime) {
      return "not available";
    }
    return humanDuration(time.uptime);
  };

  return (
    <PaperBox>
      <Grid container>
        <Grid item container justifyContent="center">
          <TimeIcon sx={styles.icon} color="primary" />
        </Grid>
        <Grid item container justifyContent="space-between">
          <Typography>Current time</Typography>
          <Typography>{renderTime()}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography>Uptime</Typography>
          <Typography>{renderUptime()}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography>Timezone</Typography>
          <Typography>{time?.timezone}</Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography>Timezone name</Typography>
          <Typography>{time?.timezoneName}</Typography>
        </Grid>
      </Grid>
    </PaperBox>
  );
};

export default Time;
