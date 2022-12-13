import { useEffect } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import { getCpu, onCpu, setError, selectCpu } from 'renderer/views/Cpu/reducer';
import { CpuArgs } from 'main/si/types';
// Mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typegraphy from '@mui/material/Typography';

const Cpu = () => {
  // Redux
  const cpu = useAppSelector(selectCpu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCpu());

    // subcribe cpu event
    window.api.ipcRenderer.on('cpu', (e: string | ICpu) => {
      if (typeof e === 'string') {
        dispatch(setError(e));
      } else {
        dispatch(onCpu(e as CpuArgs));
      }
    });
  }, [dispatch]);

  return (
    <Box>
      <Paper>
        <Box>
          <Typegraphy>{cpu?.brand}</Typegraphy>
          <Typegraphy>{cpu?.family}</Typegraphy>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cpu;
