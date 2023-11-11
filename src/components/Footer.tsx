import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Logo from '@components/Logo';
import * as S from './Footer.styled';

function Footer() {
  return (
    <S.Div>
      <div className='footer-main-box'>
        <div className='footer-main'>
          <div className='footer-logo-box'>
            <Logo className='footer-logo mb' />
            <div className='footer-slogan'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </div>
          </div>

          <div className='row'>
            <div className='col pr'>
              <Button className='footer-button'>Our Story</Button>
              <Button className='footer-button'>Catering</Button>
              <Button className='footer-button'>Ingredients</Button>
              <Button className='footer-button'>Core Values </Button>
              <Button className='footer-button'>Get Our App</Button>
            </div>

            <div className='col'>
              <Button className='footer-button'>Fundraiding</Button>
              <Button className='footer-button'>Blog</Button>
              <Button className='footer-button'>Gift Cards</Button>
              <Button className='footer-button'>Contact Us</Button>
              <Button className='footer-button'>Privacy Policy</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-footer-box'>
        <div className='footer-footer'>
          <div className='footer-copyright'>{`© SPOONS ${new Date().getFullYear()}. All rights reserved.`}</div>

          <div className='footer-socials'>
            <IconButton>
              <Facebook />
            </IconButton>

            <IconButton>
              <Twitter />
            </IconButton>

            <IconButton>
              <Instagram />
            </IconButton>

            <IconButton>
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>
    </S.Div>
  );
}

export default Footer;
