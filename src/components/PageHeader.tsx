import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

function PageHeader({ text }: { text: string }) {
  return (
    <Typography
      variant='h3'
      sx={{
        color: palette.primary[950],
        pt: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
        pb: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem' },
        fontSize: { xs: '1.5rem', md: '2rem' },
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontWeight: 800,
      }}
    >
      {text}
    </Typography>
  );
}

export default PageHeader;
