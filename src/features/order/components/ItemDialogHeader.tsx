import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ItemDialogHeaderProps {
  name: string;
  description: string | undefined;
}

function ItemDialogHeader({ name, description }: ItemDialogHeaderProps) {
  return (
    <>
      <div id='item-dialog-header-anchor'></div>

      <Stack spacing={1} sx={{ p: '0 16px 16px 16px' }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: '550',
            letterSpacing: '.125rem',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {name}
        </Typography>

        {description && (
          <Typography
            variant='body1'
            sx={{
              '&::first-letter': { textTransform: 'lowercase' },
              fontSize: { xs: '.75rem', sm: '1rem' },
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </>
  );
}

export default ItemDialogHeader;
