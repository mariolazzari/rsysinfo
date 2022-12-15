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

const Sys = () => {
  const system = useAppSelector(selectSystem);
  const dispatch = useAppDispatch();

  const styles = {
    icon: {
      fontSize: 50,
      marginBottom: 3,
    },
    text: {
      maxWidth: 200,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };

  const renderItems = () => {
    const items = [
      { label: 'Manufacturer', value: system?.manufacturer },
      { label: 'Model', value: system?.model },
      { label: 'Version', value: system?.version },
      { label: 'Serial', value: system?.serial },
      { label: 'UUID', value: system?.uuid },
      { label: 'SKU', value: system?.sku },
      { label: 'Virtual?', value: system?.virtual ? 'Yes' : 'No' },
    ];

    return items.map((item) => (
      <Grid
        key={item.label}
        item
        container
        justifyContent="space-between"
        xs={12}
      >
        <Typography>{item.label}</Typography>
        <Typography sx={styles.text}>{item.value}</Typography>
      </Grid>
    ));
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
      <Grid container justifyContent="center" spacing={1}>
        <Grid item container justifyContent="center" xs={12}>
          <SystemIcon sx={styles.icon} color="primary" />
        </Grid>
        {renderItems()}
      </Grid>
    </PaperBox>
  );
};

export default Sys;
