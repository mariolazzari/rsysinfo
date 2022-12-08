import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import {
  getCpu,
  onCpu,
  setError,
  selectCpu,
} from 'renderer/components/Cpu/reducer';
// Mui
import Typegraphy from '@mui/material/Typography';
import { IData, ICpu } from 'main/si/types';

const Cpu = () => {
  // Redux
  const cpu = useAppSelector(selectCpu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCpu());

    window.electron.ipcRenderer.on('cpu', (e) => {
      const res = e as IData<ICpu>;
      if (res.error) {
        dispatch(setError(res.error));
      } else {
        dispatch(onCpu(res.data));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Typegraphy>{cpu?.brand}</Typegraphy>
      <Typegraphy>{cpu?.family}</Typegraphy>

      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  );
};

export default Cpu;
