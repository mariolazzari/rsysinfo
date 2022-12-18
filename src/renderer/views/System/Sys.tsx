import { useEffect } from "react";
// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// Mui icons
import SystemIcon from "@mui/icons-material/SystemUpdate";
// components
import PaperBox from "renderer/components/PaperBox";
// redux
import { useAppSelector } from "renderer/redux/hooks";
import { selectSystem } from "../../redux/slices/system";

const Sys = () => {
  const system = useAppSelector(selectSystem);

  const styles = {
    text: {
      maxWidth: 200,
    },
  };

  const renderItems = () => {
    const items = [
      { label: "Manufacturer", value: system?.manufacturer },
      { label: "Model", value: system?.model },
      { label: "Version", value: system?.version },
      { label: "Serial", value: system?.serial },
      { label: "UUID", value: system?.uuid },
      { label: "SKU", value: system?.sku },
      { label: "Virtual?", value: system?.virtual ? "Yes" : "No" },
    ];

    return items.map((item) => (
      <Tooltip key={item.label} title={item.value}>
        <Grid item container justifyContent="space-between" xs={12}>
          <Typography>{item.label}</Typography>
          <Typography sx={styles.text} noWrap>
            {item.value}
          </Typography>
        </Grid>
      </Tooltip>
    ));
  };

  return (
    <PaperBox icon={<SystemIcon />}>
      <Grid container justifyContent="center">
        {renderItems()}
      </Grid>
    </PaperBox>
  );
};

export default Sys;
