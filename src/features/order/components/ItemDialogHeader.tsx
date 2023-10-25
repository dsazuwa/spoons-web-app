import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

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
            fontWeight: 700,
            lineHeight: 1.25,
            fontSize: { xs: '1.5rem', sm: '2.25rem' },
          }}
        >
          {name}
        </Typography>

        {description && (
          <Typography
            variant='body1'
            sx={{
              '&::first-letter': { textTransform: 'lowercase' },
              color: palette.grey[500],
              fontWeight: 600,
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
