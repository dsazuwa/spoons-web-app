import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import {
  useRecoverPasswordMutation,
  useRequestPasswordRecoveryMutation,
  useVerifyRecoveryCodeMutation,
} from '@features/user';
import useSnackbarAlert from '@hooks/useSnackbarAlert';
import getErrorMessage from '@utils/getReduxErrorMessage';

const useRecover = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const { snackbar, setSnackbar, handleClose } = useSnackbarAlert();

  const handleError = (
    error: FetchBaseQueryError | SerializedError | undefined,
  ) => {
    const message = getErrorMessage(error);
    setSnackbar({ open: true, message, severity: 'error' });
  };

  const [
    requestRecovery,
    {
      // isLoading: isRequestLoading,
      isSuccess: isRequestSuccess,
      isError: isRequestError,
      error: requestError,
    },
  ] = useRequestPasswordRecoveryMutation();

  const [
    verifyCode,
    {
      // isLoading: isVerifyLoading,
      isSuccess: isVerifySuccess,
      isError: isVerifyError,
      error: verifyError,
    },
  ] = useVerifyRecoveryCodeMutation();

  const [
    recoverPassword,
    {
      // isLoading: isRecoverLoading,
      isSuccess: isRecoverSuccess,
      isError: isRecoverError,
      error: recoverError,
    },
  ] = useRecoverPasswordMutation();

  /** *************** STEP 1: REQUEST RECOVERY *************** */
  useEffect(() => {
    if (isRequestSuccess && !isVerifySuccess && !isRecoverSuccess) {
      setSnackbar({
        open: true,
        message: 'A recovery code has been sent to your email',
        severity: 'info',
      });

      if (step === 1) setStep(2);
    }

    if (isRequestError) handleError(requestError);
  }, [
    isRequestSuccess,
    isVerifySuccess,
    isRecoverSuccess,
    isRequestError,
    requestError,
    step,
  ]);

  const handleRequestRecovery = (data: string) => {
    setEmail(data);
    requestRecovery({ email: data });
  };

  const handleResendRecovery = () => {
    requestRecovery({ email });
  };

  /** *************** STEP 2: VERIFY EMAIL *************** */
  useEffect(() => {
    if (isRequestSuccess && isVerifySuccess && !isRecoverSuccess) {
      setSnackbar({
        open: true,
        message: 'Email verified!',
        severity: 'success',
      });
      setStep(3);
    }

    if (isVerifyError) handleError(verifyError);
  }, [
    isRequestSuccess,
    isVerifySuccess,
    isRecoverSuccess,
    isVerifyError,
    verifyError,
  ]);

  const handleVerifySubmit = (data: string) => {
    setCode(data);
    verifyCode({ code: data, email });
  };

  /** *************** STEP 3: CHANGE PASSWORD *************** */
  useEffect(() => {
    if (isRecoverSuccess && isVerifySuccess && isRequestSuccess) {
      setSnackbar({
        open: true,
        message: 'Password successfully changed!',
        severity: 'success',
      });

      setTimeout(() => {
        router.push('/');
      }, 500);
    }

    if (isRecoverError) handleError(recoverError);
  }, [
    isRequestSuccess,
    isVerifySuccess,
    isRecoverSuccess,
    isRecoverError,
    recoverError,
    router,
  ]);

  const handleRecoverSubmit = (data: string) => {
    recoverPassword({ code, email, password: data });
  };

  return {
    step,
    snackbar,
    handleClose,
    handleRequestRecovery,
    handleResendRecovery,
    handleVerifySubmit,
    handleRecoverSubmit,
  };
};

export default useRecover;
