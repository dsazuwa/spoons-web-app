import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Logo from '@components/Logo';
import palette from '@utils/palette';
import FooterButton from './FooterButton';
import SocialIconButton from './SocialIconButton';

function Footer() {
  return (
    <div
      style={{
        padding: '8px 0',
        marginTop: 'auto',
        borderTop: `1px solid ${palette.grey[200]}`,
      }}
    >
      <Stack
        spacing={{ xs: 0.5, sm: 1 }}
        justifyItems='center'
        alignItems='center'
        my={1}
      >
        <Logo size='sm' color={palette.primary[800]} />

        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <FooterButton label='Ingredients' />
          <FooterButton label='Catering' />
          <FooterButton label='Core Values' />
          <FooterButton label='Contact Us' />
        </Stack>

        <Stack direction='row'>
          <SocialIconButton icon={<Facebook sx={{ fontSize: '15px' }} />} />
          <SocialIconButton icon={<Twitter sx={{ fontSize: '15px' }} />} />
          <SocialIconButton icon={<Instagram sx={{ fontSize: '15px' }} />} />
          <SocialIconButton icon={<LinkedIn sx={{ fontSize: '15px' }} />} />
        </Stack>

        <Typography
          variant='body2'
          align='center'
          sx={{ fontSize: '10px', color: palette.grey[400] }}
        >
          {`© SPOONS ${new Date().getFullYear()}. All rights reserved.`}
        </Typography>
      </Stack>
    </div>
  );
}

export default Footer;
