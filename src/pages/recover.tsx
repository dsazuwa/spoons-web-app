import { RecoverPageContent, useRecover } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';

function Recover() {
  const {
    router,
    step,
    snackbar,
    authReady,
    isAuthenticated,
    handleClose,
    handleRequestRecovery,
    handleResendRecovery,
    handleVerifySubmit,
    handleRecoverSubmit,
  } = useRecover();

  return getSpoonsLayout(
    <RecoverPageContent
      step={step}
      snackbar={snackbar}
      handleRequestRecovery={handleRequestRecovery}
      handleResendRecovery={handleResendRecovery}
      handleVerifySubmit={handleVerifySubmit}
      handleRecoverSubmit={handleRecoverSubmit}
      handleClose={handleClose}
    />,
    router,
    'unauthenticated',
    authReady,
    isAuthenticated,
  );
}

export default Recover;
