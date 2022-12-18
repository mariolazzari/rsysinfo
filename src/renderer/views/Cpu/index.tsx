import { useEffect } from "react";
// Redux
import { useAppSelector, useAppDispatch } from "renderer/redux/hooks";
import { getCpu, onCpu, setError, selectCpu } from "renderer/redux/slices/cpu";
import { CpuArgs } from "main/si/types";
// Mui
import Typegraphy from "@mui/material/Typography";
// Mui icons
import CpuIcon from "@mui/icons-material/Psychology";
// components
import PaperBox from "renderer/components/PaperBox";
// utils
import { on } from "renderer/utils/ipc";

const Cpu = () => {
  // Redux
  const cpu = useAppSelector(selectCpu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCpu());

    // subcribe cpu event
    on("cpu", (e) => {
      if (typeof e === "string") {
        dispatch(setError(e));
      } else {
        dispatch(onCpu(e as CpuArgs));
      }
    });
  }, [dispatch]);

  return (
    <PaperBox icon={<CpuIcon />}>
      <Typegraphy>{cpu?.brand}</Typegraphy>
      <Typegraphy>{cpu?.family}</Typegraphy>
    </PaperBox>
  );
};

export default Cpu;
