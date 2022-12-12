import { GeneralArgs } from 'main/si/types';
import { useEffect } from 'react';
// Redux
import { useAppSelector, useAppDispatch } from 'renderer/redux/hooks';
import {
  getData,
  onData,
  onError,
  selectVersion,
} from 'renderer/components/General/reducer';
// Mui
import Typography from '@mui/material/Typography';
// components
import Time from './Time';

const { on } = window.electron.ipcRenderer;

const General = () => {
  const version = useAppSelector(selectVersion);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getData());
    }, 1000);

    on('general', (e) => {
      if (typeof e === 'string') {
        dispatch(onError(e));
      } else {
        const data = e as GeneralArgs;
        dispatch(onData(data));
      }
    });

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <>
      <Typography> Version: {version?.node} </Typography>
      <Time />
    </>
  );
};

export default General;
