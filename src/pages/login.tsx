import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller } from 'react-hook-form';

import FormField from '@components/FormField';
import { NextLinkComposed } from '@components/Link';
import SnackbarAlert from '@components/SnackbarAlert';
import getSpoonsLayout from '@layout/SpoonsLayout';

import { useLogin } from '@features/user';

function Login() {
  const {
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    snackbar,
    handleClose,
  } = useLogin();

  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}
      >
        Welcome Back
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2}>
          <FormField
            name='email'
            label='Email Address'
            type='text'
            {...{ control, errors }}
          />
          <FormField
            name='password'
            label='Password'
            type='password'
            {...{ control, errors }}
          />
        </Stack>

        <Box display='flex' alignItems='center' mb={1}>
          <Controller
            name='remember'
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <FormControlLabel
                label='Remember me'
                control={
                  <Checkbox
                    checked={!!value}
                    {...{
                      onChange,
                      onBlur,
                      name,
                      ref,
                    }}
                  />
                }
                sx={{ flexGrow: 1 }}
              />
            )}
          />

          <Typography
            color='primary'
            textTransform='none'
            component={NextLinkComposed}
            to={{
              pathname: '/recover',
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          variant='contained'
          color='primary'
          fullWidth
          sx={{ mb: 2 }}
          type='submit'
        >
          Sign In
        </Button>
      </form>

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography>
          Don&apos;t have an account?
          <Typography
            textTransform='none'
            component={NextLinkComposed}
            to={{ pathname: '/register' }}
            sx={{ ml: 1 }}
          >
            Create an account
          </Typography>
        </Typography>
      </Box>

      <SnackbarAlert
        open={snackbar.open}
        onClose={handleClose}
        severity='error'
        message={snackbar.message}
        duration={6000}
      />
    </>
  );
}

Login.getLayout = getSpoonsLayout;

export default Login;
