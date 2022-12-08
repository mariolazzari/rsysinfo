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
import Memory from './components/Memory';
import Battery from './components/Battery';

const routes = [
  {
    path: '/',
    component: <General />,
  },
  {
    path: '/system',
    component: <System />,
  },
  {
    path: '/cpu',
    component: <Cpu />,
  },
  {
    path: '/memory',
    component: <Memory />,
  },
  {
    path: '/battery',
    component: <Battery />,
  },
];

function App() {
  const styles = {
    container: {
      backgroundColor: gray[200],
    },
    component: {
      padding: 2,
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
          <Grid sx={styles.component} item xs={10}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
