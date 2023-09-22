import Typography from '@mui/material/Typography';

import SnackbarAlert from '@components/SnackbarAlert';
import { AuthLink, RegisterForm } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useRegister from './hooks/useRegister';

function Register() {
  const {
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    snackbar,
    handleClose,
  } = useRegister();

  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Create an account
      </Typography>

      <RegisterForm
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmitHandler={onSubmitHandler}
      />

      <AuthLink
        message='Already have an account?'
        pathname='/login'
        text='Login'
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

Register.getLayout = getSpoonsLayout;

export default Register;
