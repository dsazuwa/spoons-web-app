import LunchDining from '@mui/icons-material/LunchDining';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ILogoProps {
  color: string;
  size: 'sm' | 'm';
}

function Logo({ color, size }: ILogoProps) {
  const width = size === 'sm' ? 12 : 14;
  const fontSize = size === 'sm' ? 13 : 15;
  const letterSpacing = size === 'sm' ? '.23rem' : '.3rem';

  return (
    <Stack direction='row' alignItems={'center'} spacing={1}>
      <LunchDining sx={{ color, width }} />
      <Typography
        variant='body1'
        color='primary'
        noWrap
        sx={{
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize,
          letterSpacing,
          textDecoration: 'none',
          color,
        }}
      >
        spoons
      </Typography>
    </Stack>
  );
}

export default Logo;
