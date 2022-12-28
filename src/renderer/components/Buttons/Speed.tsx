import { ReactElement } from "react";
// Mui
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

export interface SpeedAction {
  icon: ReactElement;
  name: string;
}

interface SpeedProps {
  actions: SpeedAction[];
  onClick: (name: string) => void;
}

const Speed = ({ actions, onClick }: SpeedProps) => {
  const styles = {
    speed: {
      position: "absolute",
      bottom: 4,
      right: 4,
    },
  };

  return (
    <SpeedDial
      sx={styles.speed}
      icon={<SpeedDialIcon />}
      ariaLabel="Sections selector"
    >
      {actions.map(({ name, icon }) => (
        <SpeedDialAction
          key={name}
          icon={icon}
          tooltipTitle={name}
          onClick={() => onClick(name)}
        />
      ))}
    </SpeedDial>
  );
};

export default Speed;
