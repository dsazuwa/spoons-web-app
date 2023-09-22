import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FormField from '@components/FormField';
import useChangePasswordForm from '@features/user/hooks/useChangePasswordForm';

interface ChangePasswordFormProps {
  submit: (password: string) => void;
}

function ChangePasswordForm({ submit }: ChangePasswordFormProps) {
  const { control, errors, handleSubmit, onSubmitHandler } =
    useChangePasswordForm(submit);

  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Change Password
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2}>
          <Typography textAlign='center'>
            Your identity has been verified. Set your new password.
          </Typography>

          <FormField
            name='password'
            label='Password'
            type='password'
            {...{ control, errors }}
          />

          <FormField
            name='confirm'
            label='Confirm Password'
            type='password'
            {...{ control, errors }}
          />

          <Button variant='contained' color='primary' fullWidth type='submit'>
            Reset Password
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default ChangePasswordForm;
