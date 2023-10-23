import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemQuantityControl from './ItemQuantityControl';

interface ItemDialogProps {
  item: MenuItemType;
  modifiers: Modifier[];
  open: boolean;
  handleClose: () => void;
}

function ItemDialog({ item, open, handleClose }: ItemDialogProps) {
  const { name, description, photoUrl } = item;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullWidth={true}
      fullScreen={smallScreen}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: { xs: '0px', sm: '10px' } } }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: '600',
          fontSize: { xs: '15px', sm: '20px' },
        }}
      >
        <IconButton
          edge='start'
          aria-label='close'
          onClick={handleClose}
          sx={{ mr: { xs: 1, sm: 2 } }}
        >
          <CloseIcon
            sx={{
              color: 'black',
              fontSize: { xs: '15px', sm: '20px' },
            }}
          />
        </IconButton>
        {name}
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ padding: '10px 12px' }}>
        <Typography
          variant='body1'
          sx={{
            '&::first-letter': { textTransform: 'lowercase' },
          }}
        >
          {description}
        </Typography>

        <Box
          component='img'
          src={`/menu-items/${photoUrl}`}
          alt={name}
          width='100%'
        />
      </DialogContent>

      <Divider />

      <ItemQuantityControl />
    </Dialog>
  );
}

export default ItemDialog;
