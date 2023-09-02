import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller } from 'react-hook-form';

import FormField from '@components/FormField';
import { NextLinkComposed } from '@components/Link';
import { useLogin } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';

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

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='error'>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

Login.getLayout = getSpoonsLayout;

export default Login;
