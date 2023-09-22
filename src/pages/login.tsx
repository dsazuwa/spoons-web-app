import Typography from '@mui/material/Typography';

import SnackbarAlert from '@components/SnackbarAlert';
import { AuthLink, LoginForm } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useLogin from './hooks/useLogin';

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

      <LoginForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmitHandler={onSubmitHandler}
      />

      <AuthLink
        message="Don't have an account?"
        pathname='/register'
        text='Create an account'
      />

      <SnackbarAlert
        open={snackbar.open}
        onClose={handleClose}
        severity={snackbar.severity}
        message={snackbar.message}
        duration={6000}
      />
    </>
  );
}

Login.getLayout = getSpoonsLayout;

export default Login;
