import { SubmitHandler, useForm } from 'react-hook-form';

export type VerifyFieldType = `${1 | 2 | 3 | 4 | 5}`;
export type VerifyFormType = { [K in VerifyFieldType]: string };

const useVerify = (resend: () => void, submit: (code: string) => void) => {
  const codeLength = 5;

  const defaultValues: VerifyFormType = {} as VerifyFormType;
  for (let i = 1; i <= codeLength; i += 1)
    defaultValues[i.toString() as VerifyFieldType] = '';

  const fieldIDs: string[] = [];
  for (let i = 1; i <= codeLength; i += 1) fieldIDs.push(`textField_${i}`);

  const fields = Array.from({ length: codeLength }, (_, i) =>
    (i + 1).toString(),
  ) as VerifyFieldType[];

  const { control, handleSubmit, reset, getValues } = useForm<VerifyFormType>({
    defaultValues,
  });

  const handleResend = () => {
    reset();
    resend();
  };

  const onSubmitHandler: SubmitHandler<VerifyFormType> = (data) => {
    reset();
    submit(Object.values(data).join(''));
  };

  const allowOnlyOneNumber = (value: string) =>
    value.length === 0 ? '' : value[value.length - 1].replace(/[^0-9]/, '');

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: string,
  ) => {
    if (value.length === 0) return;

    if (Object.values(getValues()).join('').length === codeLength) {
      e.target.blur();
      handleSubmit(onSubmitHandler)();
      return;
    }

    const num = parseInt(e.target.name, 10);

    if (num === codeLength) return;

    const elemId = fieldIDs[num];
    document.getElementById(elemId)?.focus();
  };

  return {
    fields,
    fieldIDs,
    control,
    allowOnlyOneNumber,
    onSubmitHandler,
    handleSubmit,
    handleResend,
    handleFieldChange,
  };
};

export default useVerify;
