// navgation
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// Mui
import { ThemeProvider } from '@mui/material/styles';
import theme from 'renderer/theme';
import '@fontsource/roboto';
import Grid from '@mui/material/Grid';
import gray from '@mui/material/colors/grey';

// components
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from 'renderer/components/AppBar';
import Cpu from './components/Cpu';
import General from './components/General';
import System from './components/System';

function App() {
  const styles = {
    container: {
      backgroundColor: gray[200],
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Grid sx={styles.container} container>
          <Grid item xs={2}>
            <AppBar />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<General />} />
              <Route path="/cpu" element={<Cpu />} />
              <Route path="/system" element={<System />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
