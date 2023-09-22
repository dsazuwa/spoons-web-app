import SnackbarAlert from '@components/SnackbarAlert';
import { PasswordRecoveryFlow } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useRecover from './hooks/useRecover';

function ForgotPassword() {
  const {
    step,
    snackbar,
    handleClose,
    handleRequestRecovery,
    handleResendRecovery,
    handleVerifySubmit,
    handleRecoverSubmit,
  } = useRecover();

  return (
    <>
      <PasswordRecoveryFlow
        step={step}
        handleRequestRecovery={handleRequestRecovery}
        handleResendRecovery={handleResendRecovery}
        handleVerifySubmit={handleVerifySubmit}
        handleRecoverSubmit={handleRecoverSubmit}
      />

      <SnackbarAlert
        open={snackbar.open}
        onClose={handleClose}
        severity={snackbar.severity}
        message={snackbar.message}
        duration={1000}
      />
    </>
  );
}

ForgotPassword.getLayout = getSpoonsLayout;

export default ForgotPassword;
