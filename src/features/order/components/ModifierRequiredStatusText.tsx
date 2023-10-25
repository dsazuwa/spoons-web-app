import Typography from '@mui/material/Typography';

function ModifierRequiredStatusText(props: { color: string; text: string }) {
  const { color, text } = props;

  return (
    <Typography
      sx={{
        color,
        letterSpacing: '.05em',
        fontWeight: 700,
        fontSize: { xs: '.6rem', sm: '.8rem' },
      }}
    >
      {text}
    </Typography>
  );
}

export default ModifierRequiredStatusText;
