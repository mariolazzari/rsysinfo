import { useState, ReactNode } from "react";
// Mui
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/SvgIcon";

type PaperBoxProps = {
  icon?: ReactNode;
  children: ReactNode;
};

const PaperBox = ({ icon, children }: PaperBoxProps) => {
  const [elevation, setElevation] = useState(1);

  const styles = {
    paper: {
      padding: 2,
    },
    icon: {
      fontSize: 50,
      marginBottom: 3,
    },
  };

  const onFocus = () => {
    setElevation(20);
  };

  const onBlur = () => {
    setElevation(1);
  };

  return (
    <Grid
      container
      sx={styles.paper}
      component={Paper}
      elevation={elevation}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
    >
      <Grid item container justifyContent="center" xs={12}>
        <Icon sx={styles.icon} color="primary">
          {icon}
        </Icon>
      </Grid>

      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PaperBox;
