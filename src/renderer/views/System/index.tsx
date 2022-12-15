import { useEffect } from 'react';
// Mui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Mui icons
import SystemIcon from '@mui/icons-material/SystemUpdate';

// utils
import { on } from 'renderer/utils/ipc';
import { SystemArgs } from 'main/si/types';
// components
import PaperBox from 'renderer/components/PaperBox';

// redux
import { useAppDispatch, useAppSelector } from 'renderer/redux/hooks';
import { getSystem, onSystem, setError, selectSystem } from './reducer';
import Sys from './Sys';

const System = () => {
  const system = useAppSelector(selectSystem);
  const dispatch = useAppDispatch();

  const styles = {
    icon: {
      fontSize: 50,
      marginBottom: 3,
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
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={3}>
        <Sys />
      </Grid>
    </Grid>
  );
};

export default System;
