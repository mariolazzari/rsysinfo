// Redux
import { useAppSelector } from "renderer/redux/hooks";
import { selectTime } from "renderer/redux/slices/general";
// Mui
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
// Mui icons
import TimeIcon from "@mui/icons-material/AccessTime";
// component
import PaperBox from "renderer/components/PaperBox";
// utils
import { humanDuration, formatDate } from "renderer/utils/dates";

const Time = () => {
  // Redux
  const time = useAppSelector(selectTime);

  const styles = {
    value: {
      cursor: "pointer",
      width: 300,
    },
  };

  const renderTime = (): string => {
    if (!time) {
      return "not available";
    }
    const date = new Date(time.current);

    return formatDate(date);
  };

  const renderUptime = (): string => {
    if (!time?.uptime) {
      return "not available";
    }
    return humanDuration(time.uptime);
  };

  const renderItems = () => {
    const items = [
      { label: "Current time", value: renderTime() },
      { label: "Uptime", value: renderUptime() },
      { label: "Timezone", value: time?.timezone },
      { label: "Timezone name", value: time?.timezoneName },
    ];

    return items.map(({ label, value }, key) => (
      <Tooltip key={key} title={`${label}: ${value}`} arrow followCursor>
        <Grid item container justifyContent="space-between">
          <Typography>{label}</Typography>
          <Typography sx={styles.value} align="right" noWrap>
            {value}
          </Typography>
        </Grid>
      </Tooltip>
    ));
  };

  return (
    <PaperBox icon={<TimeIcon />}>
      <Grid container>{renderItems()}</Grid>
    </PaperBox>
  );
};

export default Time;
