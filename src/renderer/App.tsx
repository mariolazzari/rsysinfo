import { useState, useMemo, useCallback, lazy, Suspense } from "react";
// Mui
import { ThemeProvider } from "@mui/material/styles";
import theme from "renderer/theme";
import "@fontsource/roboto";
import Container from "@mui/material/Container";
import gray from "@mui/material/colors/grey";
import CssBaseline from "@mui/material/CssBaseline";
// Mui icons
import GeneralIcon from "@mui/icons-material/Info";
import SystemIcon from "@mui/icons-material/SettingsApplications";
import CpuIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import BatteryIcon from "@mui/icons-material/Battery90";
// components
import Speed, { SpeedAction } from "renderer/components/Buttons/Speed";
import BackDrop from "renderer/components/Progress/BackDrop";
const General = lazy(() => import("renderer/views/General"));
const Cpu = lazy(() => import("renderer/views/Cpu"));
const System = lazy(() => import("renderer/views/System"));
const Memory = lazy(() => import("renderer/views/Memory"));
const Battery = lazy(() => import("renderer/views/Battery"));

const App = () => {
  const [section, setSection] = useState("general");

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: gray[200],
      padding: 2,
      minHeight: "100vh",
      minWidth: "25vw",
      overflow: "auto",
    },
  };

  const speedActions: SpeedAction[] = [
    { name: "General", icon: <GeneralIcon /> },
    { name: "Cpu", icon: <CpuIcon /> },
    { name: "System", icon: <SystemIcon /> },
    { name: "Nemory", icon: <MemoryIcon /> },
    { name: "Battery", icon: <BatteryIcon /> },
  ];

  const renderSection = () => {
    switch (section.toLowerCase()) {
      case "system":
        return <System />;

      case "cpu":
        return <Cpu />;

      case "memory":
        return <Memory />;

      case "battery":
        return <Battery />;

      default:
        return <General />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={styles.container} maxWidth={false} disableGutters>
        <Suspense fallback={<BackDrop open />}>{renderSection()}</Suspense>
        <Speed actions={speedActions} onClick={setSection} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
