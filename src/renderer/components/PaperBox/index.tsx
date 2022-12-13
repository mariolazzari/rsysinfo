import { useState, ReactNode } from 'react';
// Mui
import Paper from '@mui/material/Paper';

type PaperBoxProps = {
  children: ReactNode;
};

const PaperBox = ({ children }: PaperBoxProps) => {
  const [elevation, setElevation] = useState(1);

  const onFocus = () => {
    setElevation(20);
  };

  const onBlur = () => {
    setElevation(1);
  };

  return (
    <Paper
      sx={{ padding: 2 }}
      elevation={elevation}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
    >
      {children}
    </Paper>
  );
};

export default PaperBox;
