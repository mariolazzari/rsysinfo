import { GeneralArgs } from 'main/si/types';
import { useEffect } from 'react';
// Redux
import { useAppDispatch } from 'renderer/redux/hooks';
import { getData, onData, onError } from 'renderer/views/General/reducer';
// Mui
import Stack from '@mui/material/Stack';
// utils
import { on } from 'renderer/utils/ipc';
// components
import Versions from './Versions';
import Time from './Time';

const General = () => {
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
    <Stack spacing={2}>
      <Versions />
      <Time />
    </Stack>
  );
};

export default General;
