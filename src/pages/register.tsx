import { RegisterPageContent } from '@features/user';
import getSpoonsLayout from '@layout/SpoonsLayout';
import useRegister from './hooks/useRegister';

function Register() {
  const {
    router,
    authReady,
    isAuthenticated,
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    snackbar,
    handleClose,
  } = useRegister();

  return getSpoonsLayout(
    <RegisterPageContent
      control={control}
      errors={errors}
      snackbar={snackbar}
      handleSubmit={handleSubmit}
      onSubmitHandler={onSubmitHandler}
      handleClose={handleClose}
    />,
    router,
    'unauthenticated',
    authReady,
    isAuthenticated,
  );
}

export default Register;
