import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface ItemDialogAppBarProps {
  isScrolledPast: boolean;
  name: string;
  handleClose: () => void;
}

function ItemDialogAppBar({
  isScrolledPast,
  name,
  handleClose,
}: ItemDialogAppBarProps) {
  return (
    <AppBar
      id='item-dialog-app-bar'
      position='sticky'
      sx={{
        backgroundColor: 'white',
        boxShadow: '0',
        height: { xs: '56px', sm: '64px' },
      }}
    >
      <Toolbar sx={{ height: { xs: '56px', sm: '64px' } }}>
        <IconButton
          edge='start'
          aria-label='close'
          onClick={handleClose}
          sx={{
            mr: { xs: 1, sm: 2 },
            color: 'black',
            fontSize: { xs: '.85rem', sm: '1.25rem' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            color: 'black',
            fontSize: { xs: '.85rem', sm: '1.25rem' },
          }}
        >
          {isScrolledPast && name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ItemDialogAppBar;
