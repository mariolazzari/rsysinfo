import React from 'react';
// Redux
import { useAppSelector } from 'renderer/redux/hooks';
import { selectVersion } from 'renderer/components/General/reducer';
// Mui
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Mui icons
import InfoIcon from '@mui/icons-material/Info';

const Versions = () => {
  const version = useAppSelector(selectVersion);

  const styles = {
    paper: {
      padding: 2,
    },
    icon: {
      fontSize: 80,
      marginY: 3,
    },
  };

  return (
    <Paper sx={styles.paper} elevation={10}>
      <Grid container>
        <Grid item container justifyContent="center">
          <InfoIcon sx={styles.icon} color="primary" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Versions;
