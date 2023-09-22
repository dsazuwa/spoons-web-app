import SnackbarAlert from '@components/SnackbarAlert';
import getSpoonsLayout from '@layout/SpoonsLayout';

import { Verify, useVerifyEmail } from '@features/user';

function VerifyEmail() {
  const { resendVerification, submit, snackbar, handleClose } =
    useVerifyEmail();

  return (
    <>
      <Verify resend={resendVerification} submit={submit} />

      <SnackbarAlert
        open={snackbar.open}
        onClose={handleClose}
        severity={snackbar.severity}
        message={snackbar.message}
        duration={3000}
      />
    </>
  );
}

VerifyEmail.getLayout = getSpoonsLayout;

export default VerifyEmail;
