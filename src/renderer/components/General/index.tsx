import { IGeneral } from 'main/si/general';
import { useEffect } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import { increment } from 'renderer/components/General/reducer';
// Mui
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

const { on, sendMessage } = window.electron.ipcRenderer;

const General = () => {
  const test = useAppSelector((state) => state.general.test);
  const dispatch = useAppDispatch();

  useEffect(() => {
    sendMessage('general', []);

    on('general', (e) => {
      const data = e as IGeneral;
    });
  }, []);

  return (
    <>
      <Typography> Test: {test} </Typography>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <Link to="/cpu">
        <button type="button">cpu</button>
      </Link>
    </>
  );
};

export default General;
