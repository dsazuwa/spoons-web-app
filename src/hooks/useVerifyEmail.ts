import { AlertColor } from '@mui/material/Alert';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import {
  useResendVerificationMutation,
  useVerifyUserMutation,
} from '@store/services/customerApi';

const useVerifyEmail = () => {
  const router = useRouter();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error' as AlertColor,
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  const [verifyUser, { isSuccess: isVerifySuccess, error: verifyError }] =
    useVerifyUserMutation();

  const [
    resendVerification,
    { isSuccess: isResendSuccess, error: resendError },
  ] = useResendVerificationMutation();

  const getErrorMessage = (err: FetchBaseQueryError | SerializedError) => {
    let message = '';

    if ('status' in err)
      message =
        'error' in err ? err.error : (err.data as { message: string }).message;
    else message = err.message ?? '';

    return message;
  };

  useEffect(() => {
    if (isVerifySuccess) {
      setSnackbar({
        open: true,
        message: 'Email verified!',
        severity: 'success',
      });

      setTimeout(() => {
        router.push('/');
      }, 500);
    }

    if (verifyError) {
      const message = getErrorMessage(verifyError);
      setSnackbar({ open: true, message, severity: 'error' });
      document.getElementById('textField_1')?.focus();
    }
  }, [isVerifySuccess, verifyError, router]);

  useEffect(() => {
    if (isResendSuccess) {
      setSnackbar({
        open: true,
        message: 'A new code has been sent to your email',
        severity: 'info',
      });
    }

    if (resendError) {
      const message = getErrorMessage(resendError);
      setSnackbar({ open: true, message, severity: 'error' });
    }
  }, [isResendSuccess, resendError]);

  const submit = (code: string) => {
    verifyUser({ code });
  };

  return {
    resendVerification,
    submit,
    snackbar,
    handleClose
  }
};

export default useVerifyEmail;
