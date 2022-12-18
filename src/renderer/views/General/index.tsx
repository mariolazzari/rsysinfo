import { GeneralArgs } from "main/si/types";
import { useEffect } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "renderer/redux/hooks";
import {
  getGeneral,
  setGeneral,
  setError,
  selectError,
} from "renderer/redux/slices/general";
// Mui
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// utils
import { on } from "renderer/utils/ipc";
// components
import Versions from "./Versions";
import Time from "./Time";

const General = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGeneral());

    const id = setInterval(() => {
      dispatch(getGeneral());
    }, 60000);

    on("general", (e) => {
      if (typeof e === "string") {
        dispatch(setError(e));
      } else {
        const data = e as GeneralArgs;
        dispatch(setGeneral(data));
      }
    });

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Versions />
      <Time />
      <Typography color="error">{error}</Typography>
    </Stack>
  );
};

export default General;
