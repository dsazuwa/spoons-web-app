import { VerifyEmailPageContent } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useVerifyEmail from './hooks/useVerifyEmail';

function VerifyEmail() {
  const {
    router,
    user,
    authReady,
    isAuthenticated,
    resendVerification,
    submit,
    snackbar,
    handleClose,
  } = useVerifyEmail();

  return getSpoonsLayout(
    <VerifyEmailPageContent
      resendVerification={resendVerification}
      submit={submit}
      snackbar={snackbar}
      handleClose={handleClose}
    />,
    router,
    'private',
    authReady,
    isAuthenticated,
    user?.status === 'pending',
  );
}

export default VerifyEmail;
