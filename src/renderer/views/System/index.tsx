import { useEffect } from "react";
// Mui
import Grid from "@mui/material/Grid";
// utils
import { on } from "renderer/utils/ipc";
import { SystemArgs } from "main/si/types";
// redux
import { useAppDispatch } from "renderer/redux/hooks";
import { getSystem, setSystem, setError } from "../../redux/slices/system";
import Sys from "./Sys";

const System = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSystem());

    // subcribe cpu event
    on("system", (e) => {
      if (typeof e === "string") {
        dispatch(setError(e));
      } else {
        const data = e as SystemArgs;
        dispatch(setSystem(data));
      }
    });
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Sys />
      </Grid>
    </Grid>
  );
};

export default System;
