import { useEffect } from "react";
import { on } from "renderer/utils/ipc";
// Mui
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Mui icons
import BatteryFull from "@mui/icons-material/BatteryFull";
import BatteryChargingFull from "@mui/icons-material/BatteryChargingFull";
import Battery90 from "@mui/icons-material/Battery90";
import Battery80 from "@mui/icons-material/Battery80";
import Battery60 from "@mui/icons-material/Battery60";
import Battery50 from "@mui/icons-material/Battery50";
import Battery30 from "@mui/icons-material/Battery30";
import Battery20 from "@mui/icons-material/Battery20";
import BatteryAlert from "@mui/icons-material/BatteryAlert";
import Battery0 from "@mui/icons-material/Battery0Bar";
import BatteryUnknown from "@mui/icons-material/BatteryUnknown";

// Redux
import { BatteryArgs } from "main/si/types";
import { useAppSelector, useAppDispatch } from "renderer/redux/hooks";
import {
  getData,
  setData,
  setError,
  selectBattery,
} from "../../redux/slices/battery";

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
      return <BatteryUnknown color="error" />;
    }

    if (data?.percent === 100) {
      return data.isCharging ? (
        <BatteryChargingFull color="primary" />
      ) : (
        <BatteryFull color="primary" />
      );
    }

    if (data?.percent > 90) {
      return <Battery90 color="primary" />;
    }

    if (data?.percent > 80) {
      return <Battery80 color="primary" />;
    }

    if (data?.percent > 60) {
      return <Battery60 color="info" />;
    }

    if (data?.percent > 50) {
      return <Battery50 color="info" />;
    }

    if (data?.percent > 30) {
      return <Battery30 color="warning" />;
    }

    if (data?.percent > 20) {
      return <Battery20 color="warning" />;
    }

    return <BatteryAlert color="warning" />;
  };

  useEffect(() => {
    dispatch(getData());

    const id = setInterval(() => {
      dispatch(getData());
    }, 60000);

    // subcribe cpu event
    on("battery", (e) => {
      if (typeof e === "string") {
        dispatch(setError(e));
      } else {
        const data = e as BatteryArgs;
        dispatch(setData(data));
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
        <Typography>{data?.hasBattery ? "Yes" : "No"}</Typography>
      </Grid>

      <Grid item container justifyContent="space-between">
        <Typography>Manufactuer</Typography>
        <Typography>{data?.manufacturer}</Typography>
      </Grid>

      <Grid item container justifyContent="space-between">
        <Typography>Charging?</Typography>
        <Typography>{data?.isCharging ? "Yes" : "No"}</Typography>
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
