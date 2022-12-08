import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
// Mui
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// Mui icons
import GeneralIcon from '@mui/icons-material/Info';
import SystemIcon from '@mui/icons-material/SettingsApplications';
import CpuIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import BatteryIcon from '@mui/icons-material/Battery90';

interface IButton {
  tooltip: string;
  icon: ReactNode;
  url: string;
}

const buttons: IButton[] = [
  { tooltip: 'General info', icon: <GeneralIcon />, url: '/' },
  { tooltip: 'System', icon: <SystemIcon />, url: '/system' },
  { tooltip: 'CPU', icon: <CpuIcon />, url: '/cpu' },
  { tooltip: 'Memory', icon: <MemoryIcon />, url: '/memory' },
  { tooltip: 'Battery', icon: <BatteryIcon />, url: '/battery' },
];

function AppBar() {
  // state
  const [selected, setSelected] = useState('/');
  const [elevation, setElevation] = useState(10);

  // styles
  const styles = {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '80vh',
      width: 50,
      marginY: '10vh',
      marginX: 1,
      padding: 1,
    },
  };

  const isSelected = (button: IButton) => button.url === selected;

  return (
    <Paper
      sx={styles.paper}
      elevation={elevation}
      onMouseEnter={() => setElevation(20)}
      onMouseLeave={() => setElevation(10)}
    >
      {buttons.map((button) => (
        <Tooltip
          key={button.url}
          title={button.tooltip}
          arrow
          placement="right"
        >
          <IconButton
            component={Link}
            to={button.url}
            color={isSelected(button) ? 'primary' : 'default'}
            onClick={() => setSelected(button.url)}
          >
            {button.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Paper>
  );
}

export default AppBar;
