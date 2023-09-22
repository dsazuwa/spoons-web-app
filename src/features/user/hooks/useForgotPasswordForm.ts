import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'zod';

const useForgotPasswordForm = (submit: (email: string) => void) => {
  const formSchema = object({
    email: string().email({ message: 'Invalid email address' }),
  });

  type FormSchema = TypeOf<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: { email: '' },
    resolver: zodResolver(formSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchema> = (data) => {
    submit(data.email);
    reset();
  };

  return { control, errors, handleSubmit, onSubmitHandler };
};

export default useForgotPasswordForm;
