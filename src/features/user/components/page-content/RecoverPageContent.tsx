import SnackbarAlert from '@components/SnackbarAlert';
import { SnackbarHandleCloseType, SnackbarType } from '@types';
import PasswordRecoveryFlow from '../PasswordRecoveryFlow';

interface RecoverPageContentProps {
  step: number;
  snackbar: SnackbarType;
  handleRequestRecovery: (data: string) => void;
  handleResendRecovery: () => void;
  handleVerifySubmit: (data: string) => void;
  handleRecoverSubmit: (data: string) => void;
  handleClose: SnackbarHandleCloseType;
}

function RecoverPageContent({
  step,
  snackbar,
  handleRequestRecovery,
  handleResendRecovery,
  handleVerifySubmit,
  handleRecoverSubmit,
  handleClose,
}: RecoverPageContentProps) {
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

export default RecoverPageContent;
