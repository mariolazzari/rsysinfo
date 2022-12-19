import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Theme } from "@mui/material";

type BackDropProps = {
  open: boolean;
};

const BackDrop = ({ open }: BackDropProps) => {
  const styles = {
    back: {
      color: "#fff",
      zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    },
  };

  return (
    <Backdrop sx={styles.back} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDrop;
