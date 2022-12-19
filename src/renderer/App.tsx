import { lazy, Suspense } from "react";
// navgation
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
// Mui
import { ThemeProvider } from "@mui/material/styles";
import theme from "renderer/theme";
import "@fontsource/roboto";
import Grid from "@mui/material/Grid";
import gray from "@mui/material/colors/grey";
import CssBaseline from "@mui/material/CssBaseline";
// components
import BackDrop from "./components/Progress/BackDrop";
const AppBar = lazy(() => import("renderer/components/AppBar"));
const Cpu = lazy(() => import("renderer/views/Cpu"));
const General = lazy(() => import("renderer/views/General"));
const System = lazy(() => import("renderer/views/System"));
const Memory = lazy(() => import("renderer/views/Memory"));
const Battery = lazy(() => import("renderer/views/Battery"));

const routes = [
  {
    path: "/",
    component: <General />,
  },
  {
    path: "/system",
    component: <System />,
  },
  {
    path: "/cpu",
    component: <Cpu />,
  },
  {
    path: "/memory",
    component: <Memory />,
  },
  {
    path: "/battery",
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
            <Suspense fallback={<BackDrop open />}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.component}
                  />
                ))}
              </Routes>
            </Suspense>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
