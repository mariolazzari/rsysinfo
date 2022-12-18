// Redux
import { useAppSelector } from "renderer/redux/hooks";
import { selectVersion } from "renderer/redux/slices/general";
// Mui
import Grid from "@mui/material/Grid";
// Mui icons
import InfoIcon from "@mui/icons-material/Terminal";
import PresentIcon from "@mui/icons-material/Check";
import MissingIcon from "@mui/icons-material/Remove";
// components
import PaperBox from "renderer/components/PaperBox";
import ListBox from "renderer/components/ListBox";

const Versions = () => {
  const version = useAppSelector(selectVersion);

  const styles = {
    listbox: {
      maxHeight: "35vh",
      overflow: "auto",
    },
  };

  const renderVersion = (from: number, to?: number) => {
    if (!version) {
      return [];
    }

    const vals = Object.entries(version).sort((a, b) =>
      a[0].localeCompare(b[0])
    ) as [[string, string]];

    return vals
      .map((v) => ({
        title: v[0],
        subtitle: v[1],
        icon:
          v[1] === "" ? (
            <MissingIcon color="secondary" />
          ) : (
            <PresentIcon color="primary" />
          ),
      }))
      .slice(from || 0, to);
  };

  return (
    <PaperBox icon={<InfoIcon />}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ListBox items={renderVersion(0, 14)} sx={styles.listbox} />
        </Grid>
        <Grid item xs={6}>
          <ListBox items={renderVersion(14)} sx={styles.listbox} />
        </Grid>
      </Grid>
    </PaperBox>
  );
};

export default Versions;
