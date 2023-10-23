import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import palette from '@utils/palette';

interface BackdropLoaderProps {
  open: boolean;
  handleClose: () => void;
}

function BackdropLoader({ open, handleClose }: BackdropLoaderProps) {
  return (
    <Backdrop
      sx={{
        color: palette.primary[700],
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
}

export default BackdropLoader;
