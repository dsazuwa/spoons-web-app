import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, boolean, object, string } from 'zod';

import { useRegisterUserMutation } from '@features/user/api';
import useSnackbarAlert from '@hooks/useSnackbarAlert';
import getErrorMessage from '@utils/getReduxErrorMessage';

const formSchema = object({
  firstName: string(),
  lastName: string(),

  email: string().email({ message: 'Invalid email address' }),

  password: string()
    .trim()
    .min(8, { message: 'Password must be 8 or more characters long' })
    .max(64, { message: 'Password must be 64 or fewer characters long' })
    .regex(/\d/, { message: 'Password must contain at least 1 digit' })
    .regex(/[a-z]/, {
      message: 'Password must contain at least 1 lowercase character',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least 1 uppercase letter',
    }),

  confirm: string().trim(),

  agreeToTerms: boolean(),
})
  .refine((data) => data.password === data.confirm, {
    message: "Passwords didn't match",
    path: ['confirm'],
  })
  .refine((data) => data.agreeToTerms, {
    message: 'You must agree to the Terms & Conditions',
    path: ['agreeToTerms'],
  });

type FormSchema = TypeOf<typeof formSchema>;

const useRegister = () => {
  const router = useRouter();
  const { snackbar, setSnackbar, handleClose } = useSnackbarAlert();

  const [registerUser, { isLoading, isSuccess, error }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (isSuccess) {
      setSnackbar({
        open: true,
        message: 'Registration Successful!',
        severity: 'success',
      });
      setTimeout(() => {
        router.push('/verify');
      }, 500);
    }

    if (error) {
      const message = getErrorMessage(error);
      setSnackbar({ open: true, message, severity: 'error' });
    }
  }, [isLoading, isSuccess, error, router]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      agreeToTerms: false,
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmitHandler: SubmitHandler<FormSchema> = (formData) =>
    registerUser(formData);

  return {
    control,
    errors,
    handleSubmit,
    onSubmitHandler,
    snackbar,
    handleClose,
  };
};

export default useRegister;
