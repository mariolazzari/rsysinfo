// navgation
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// Mui
import { ThemeProvider } from '@mui/material/styles';
import theme from 'renderer/theme';
import '@fontsource/roboto';

// components
import Cpu from './components/Cpu';
import General from './components/General';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/cpu" element={<Cpu />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
