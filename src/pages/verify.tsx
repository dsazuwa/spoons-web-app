import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import Verify from '@components/Verify';
import useVerifyEmail from '@hooks/useVerifyEmail';
import getSpoonsLayout from '@layout/SpoonsLayout';

function VerifyEmail() {
  const { resendVerification, submit, snackbar, handleClose } =
    useVerifyEmail();

  return (
    <>
      <Verify resend={resendVerification} submit={submit} />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

VerifyEmail.getLayout = getSpoonsLayout;

export default VerifyEmail;
