import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useAuthentication from '@hooks/useAuthentication';
import useSnackbarAlert from '@hooks/useSnackbarAlert';
import {
  useResendVerificationMutation,
  useVerifyUserMutation,
} from '@store/api';
import getErrorMessage from '@utils/getReduxErrorMessage';

const useVerifyEmail = () => {
  const router = useRouter();
  const { snackbar, setSnackbar, handleClose } = useSnackbarAlert();
  const { user, authReady, isAuthenticated } = useAuthentication();

  const [verifyUser, { isSuccess: isVerifySuccess, error: verifyError }] =
    useVerifyUserMutation();

  const [
    resendVerification,
    { isSuccess: isResendSuccess, error: resendError },
  ] = useResendVerificationMutation();

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
  }, [isVerifySuccess, verifyError, router, setSnackbar]);

  useEffect(() => {
    if (isResendSuccess)
      setSnackbar({
        open: true,
        message: 'A new code has been sent to your email',
        severity: 'info',
      });

    if (resendError) {
      const message = getErrorMessage(resendError);
      setSnackbar({ open: true, message, severity: 'error' });
    }
  }, [isResendSuccess, resendError, setSnackbar]);

  const submit = (code: string) => {
    verifyUser({ code });
  };

  return {
    router,
    user,
    authReady,
    isAuthenticated,
    snackbar,
    resendVerification,
    submit,
    handleClose,
  };
};

export default useVerifyEmail;
