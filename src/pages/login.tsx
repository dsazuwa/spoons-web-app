import { LoginPageContent } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useLogin from './hooks/useLogin';

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
