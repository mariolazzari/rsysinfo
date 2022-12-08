import { useEffect } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import {
  getCpu,
  onCpu,
  setError,
  selectCpu,
} from 'renderer/components/Cpu/reducer';
import { CpuArgs } from 'main/si/types';
// Mui
import Typegraphy from '@mui/material/Typography';

const Cpu = () => {
  // Redux
  const cpu = useAppSelector(selectCpu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCpu());

    // subcribe cpu event
    window.electron.ipcRenderer.on('cpu', (e) => {
      if (typeof e === 'string') {
        dispatch(setError(e));
      } else {
        dispatch(onCpu(e as CpuArgs));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Typegraphy>{cpu?.brand}</Typegraphy>
      <Typegraphy>{cpu?.family}</Typegraphy>
    </>
  );
};

export default Cpu;
