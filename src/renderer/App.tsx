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
import Cpu from './views/Cpu';
import General from './views/General';
import System from './views/System';
import Memory from './views/Memory';
import Battery from './views/Battery';

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
          <Grid item xs={1}>
            <AppBar />
          </Grid>
          <Grid
            sx={styles.component}
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={11}
          >
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
