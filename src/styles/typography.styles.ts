import { SxProps } from '@mui/material';

import palette from '@utils/palette';

export const PageHeaderStyles: SxProps = {
  color: palette.primary[950],
  pt: { xs: '15px', sm: '17.5px', md: '20px' },
  pb: { xs: '5px', sm: '7.5px', md: '10px' },
  fontSize: { xs: '30px', sm: '35px', md: '40px' },
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: 3,
  fontWeight: 800,
};
