import PaperBox from "renderer/components/PaperBox";
import Grid from "@mui/material/Grid";
// Mui icons
import UuidIcon from "@mui/icons-material/Numbers";
// Redux
import { useAppSelector } from "renderer/redux/hooks";
import { selectUuid } from "renderer/redux/slices/system";
import { Typography } from "@mui/material";

const Uuid = () => {
  // Redux
  const uuid = useAppSelector(selectUuid);

  // styles
  const styles = {
    icon: {
      fontSize: 50,
      marginBottom: 3,
    },
    value: {
      maxWidth: 200,
    },
  };

  const renderItems = () => {
    if (!uuid) {
      return;
    }

    const items = [
      { label: "OS", value: uuid.os },
      { label: "Hardware", value: uuid.hardware },
    ];

    const macs = uuid.macs.map((mac, key) => ({
      label: `Mac ${key}`,
      value: mac,
    }));
    items.push(...macs);

    return items.map((item, key) => (
      <Grid key={key} item container justifyContent="space-between" xs={12}>
        <Typography>{item.label}</Typography>
        <Typography sx={styles.value} noWrap>
          {item.value}
        </Typography>
      </Grid>
    ));
  };

  return (
    <PaperBox icon={<UuidIcon />}>
      <Grid container>{renderItems()}</Grid>
    </PaperBox>
  );
};

export default Uuid;
