import { useEffect } from 'react';
// Mui
import Grid from '@mui/material/Grid';
// Mui icons
import SystemIcon from '@mui/icons-material/SystemUpdate';
// utils
import { on } from 'renderer/utils/ipc';
import { SystemArgs } from 'main/si/types';
// components
import PaperBox from 'renderer/components/PaperBox';
// redux
import { useAppDispatch } from 'renderer/redux/hooks';
import { getSystem, onSystem, setError } from './reducer';

const System = () => {
  const dispatch = useAppDispatch();

  const styles = {
    icon: {
      fontSize: 50,
    },
  };

  useEffect(() => {
    dispatch(getSystem());

    // subcribe cpu event
    on('system', (e) => {
      if (typeof e === 'string') {
        dispatch(setError(e));
      } else {
        dispatch(onSystem(e as SystemArgs));
      }
    });
  }, [dispatch]);

  return (
    <PaperBox>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <SystemIcon sx={styles.icon} color="primary" />
        </Grid>
      </Grid>
    </PaperBox>
  );
};

export default System;
