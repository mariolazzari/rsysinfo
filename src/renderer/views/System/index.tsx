import { useEffect } from "react";
// Mui
import Grid from "@mui/material/Grid";
// utils
import { on } from "renderer/utils/ipc";
import { SystemArgs } from "main/si/types";
// redux
import { useAppDispatch, useAppSelector } from "renderer/redux/hooks";
import { getSystem, setSystem, setError } from "renderer/redux/slices/system";
// components
import Sys from "./Sys";
import Uuid from "./Uuid";

const System = () => {
  const dispatch = useAppDispatch();

  const renderItems = () => {
    const items = [<Sys />, <Uuid />];

    return items.map((item, key) => (
      <Grid key={key} item xs={12} md={6} lg={3}>
        {item}
      </Grid>
    ));
  };

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
      {renderItems()}
    </Grid>
  );
};

export default System;
