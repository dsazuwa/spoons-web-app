import Typography from '@mui/material/Typography';
import { SnackbarHandleCloseType, SnackbarType } from '@types';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import SnackbarAlert from '@components/SnackbarAlert';
import AuthLink from '../common/AuthLink';
import RegisterForm from '../forms/RegisterForm';

interface RegisterPageContentProps {
  control: Control<RegisterFormType>;
  errors: FieldErrors<RegisterFormType>;
  snackbar: SnackbarType;
  handleSubmit: UseFormHandleSubmit<RegisterFormType, undefined>;
  onSubmitHandler: SubmitHandler<RegisterFormType>;
  handleClose: SnackbarHandleCloseType;
}

function RegisterPageContent({
  control,
  errors,
  snackbar,
  handleSubmit,
  onSubmitHandler,
  handleClose,
}: RegisterPageContentProps) {
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

export default RegisterPageContent;
