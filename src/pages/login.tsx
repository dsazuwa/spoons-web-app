import { LoginPageContent, useLogin } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';

function Login() {
  const {
    router,
    authReady,
    isAuthenticated,
    control,
    errors,
    snackbar,
    handleSubmit,
    onSubmitHandler,
    handleClose,
  } = useLogin();

  return getSpoonsLayout(
    <LoginPageContent
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      snackbar={snackbar}
      handleClose={handleClose}
    />,
    router,
    'unauthenticated',
    authReady,
    isAuthenticated,
  );
}

export default Login;
