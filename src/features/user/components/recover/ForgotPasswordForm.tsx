import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FormField from '@components/FormField';
import useForgotPasswordForm from '@features/user/hooks/useForgotPasswordForm';

function ForgotPasswordForm({ submit }: { submit: (email: string) => void }) {
  const { control, errors, handleSubmit, onSubmitHandler } =
    useForgotPasswordForm(submit);

  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Forgot password?
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2} alignItems='center'>
          <Stack spacing={0.5}>
            <Typography textAlign='center'>
              Enter the email address associated with your account.
            </Typography>

            <Typography textAlign='center'>
              We will email you a verification code.
            </Typography>
          </Stack>

          <FormField
            name='email'
            label='Email Address'
            type='text'
            {...{ control, errors }}
          />

          <Button variant='contained' color='primary' fullWidth type='submit'>
            Send Code
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
