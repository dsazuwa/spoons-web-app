import SnackbarAlert from '@components/SnackbarAlert';
import Typography from '@mui/material/Typography';
import { SnackbarHandleCloseType, SnackbarType } from '@types';
import VerifyCodeForm from '../forms/VerifyCodeForm';

interface VerifyEmailContentProps {
  resendVerification: () => void;
  submit: (code: string) => void;
  snackbar: SnackbarType;
  handleClose: SnackbarHandleCloseType;
}

function VerifyEmailPageContent({
  resendVerification,
  submit,
  snackbar,
  handleClose,
}: VerifyEmailContentProps) {
  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Verify your email
      </Typography>

      <VerifyCodeForm
        contactMethod='email'
        resend={resendVerification}
        submit={submit}
      />

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

export default VerifyEmailPageContent;
