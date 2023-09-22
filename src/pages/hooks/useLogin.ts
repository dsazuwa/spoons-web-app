import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, boolean, object, string } from 'zod';

import { useLoginUserMutation } from '@features/user/api';
import useSnackbarAlert from '@hooks/useSnackbarAlert';
import getErrorMessage from '@utils/getReduxErrorMessage';

const formSchema = object({
  email: string().email({ message: 'Invalid email address' }),
  password: string(),
  remember: boolean(),
});

type FormSchema = TypeOf<typeof formSchema>;

const useLogin = () => {
  const router = useRouter();
  const { snackbar, setSnackbar, handleClose } = useSnackbarAlert();

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
  }, [data, isLoading, isSuccess, error, router]);

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
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    snackbar,
    handleClose,
  };
};

export default useLogin;
