/* eslint-disable  @typescript-eslint/no-explicit-any */

import Typography from '@mui/material/Typography';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';

import SnackbarAlert from '@components/SnackbarAlert';
import { SnackbarHandleCloseType, SnackbarType } from '@types';
import AuthLink from '../common/AuthLink';
import LoginForm from '../forms/LoginForm';

interface LoginContentProps {
  control: Control<LoginFormType, any>;
  errors: FieldErrors<LoginFormType>;
  snackbar: SnackbarType;
  handleSubmit: UseFormHandleSubmit<LoginFormType, any>;
  onSubmitHandler: SubmitHandler<LoginFormType>;
  handleClose: SnackbarHandleCloseType;
}

function LoginPageContent({
  control,
  errors,
  snackbar,
  handleSubmit,
  onSubmitHandler,
  handleClose,
}: LoginContentProps) {
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

export default LoginPageContent;
