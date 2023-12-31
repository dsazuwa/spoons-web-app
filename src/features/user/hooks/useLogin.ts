import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, boolean, object, string } from 'zod';

import useAuthentication from '@hooks/useAuthentication';
import useSnackbarAlert from '@hooks/useSnackbarAlert';
import { useLoginUserMutation } from '@store/api';
import getErrorMessage from '@utils/getReduxErrorMessage';

const formSchema = object({
  email: string().email({ message: 'Invalid email address' }),
  password: string().trim().nonempty('Password required'),
  remember: boolean(),
});

type FormSchema = TypeOf<typeof formSchema>;

const useLogin = () => {
  const router = useRouter();
  const { snackbar, setSnackbar, handleClose } = useSnackbarAlert();
  const { authReady, isAuthenticated } = useAuthentication();

  const [loginUser, { data, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      const route = data?.user.roles[0] === 'customer' ? '/' : '/admin';
      router.push(route);
    }

    if (error) {
      const message = getErrorMessage(error);
      setSnackbar({ ...snackbar, open: true, message });
    }
  }, [data, isLoading, isSuccess, error, router, snackbar, setSnackbar]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<FormSchema> = (formData) =>
    loginUser(formData);

  return {
    router,
    authReady,
    isAuthenticated,
    control,
    errors,
    snackbar,
    handleSubmit,
    onSubmitHandler,
    handleClose,
  };
};

export default useLogin;
