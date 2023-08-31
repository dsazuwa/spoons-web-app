import Button from '@mui/material/Button';

import palette from '@utils/palette';

interface FooterButtonProps {
  label: string;
}

function FooterButton({ label }: FooterButtonProps) {
  return (
    <Button
      variant='text'
      sx={{
        fontSize: { xs: '10px', m: '20px' },
        textTransform: 'capitalize',
        color: palette.grey[950],
      }}
    >
      {label}
    </Button>
  );
}

export default FooterButton;
