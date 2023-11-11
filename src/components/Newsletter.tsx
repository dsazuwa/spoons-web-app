import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import * as S from './Newsletter.styled';

function Newsletter() {
  return (
    <S.Div>
      <div className='newsletter-container'>
        <div className='newsletter-header'>Sign up for our newsletter</div>
        <div className='newsletter-subheader'>
          Be the first to know about new releases, promotions, and more. Join
          now for a delightful experience!
        </div>

        <div className='newsletter-form'>
          <div className='email-textfield-container'>
            <TextField
              className='email-textfield'
              id='newsletter-email-field'
              label='Enter your email'
              variant='filled'
            />

            <div className='email-textfield-helper'>
              We care about your data in our privacy policy
            </div>
          </div>

          <Button className='subscribe-button' variant='outlined'>
            Subscribe
          </Button>
        </div>
      </div>
    </S.Div>
  );
}

export default Newsletter;
