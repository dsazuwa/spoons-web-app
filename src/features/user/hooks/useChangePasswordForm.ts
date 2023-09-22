import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';

const useChangePasswordForm = (submit: (password: string) => void) => {
  const formSchema = object({
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
  }).refine((data) => data.password === data.confirm, {
    message: "Passwords didn't match",
    path: ['confirm'],
  });

  type FormSchema = TypeOf<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: { password: '', confirm: '' },
    resolver: zodResolver(formSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchema> = (data) => {
    submit(data.password);
    reset();
  };

  return { control, errors, handleSubmit, onSubmitHandler };
};

export default useChangePasswordForm;
