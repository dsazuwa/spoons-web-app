import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ItemDialogProps {
  item: PublicMenuItemType;
  open: boolean;
  handleClose: () => void;
}

function ItemDialog({ item, open, handleClose }: ItemDialogProps) {
  const { name, description, photoUrl } = item;

  const smallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Dialog
      fullWidth={true}
      fullScreen={smallScreen}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { borderRadius: { xs: '0px', sm: '10px' } } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClose}
          aria-label='close'
          sx={{ mr: '10px' }}
        >
          <CloseIcon />
        </IconButton>
        {name}
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ padding: '10px 12px' }}>
        <Typography
          variant='body1'
          sx={{
            '&::first-letter': {
              textTransform: 'capitalize',
            },
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
    </Dialog>
  );
}

export default ItemDialog;
