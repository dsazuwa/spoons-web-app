import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface VerifyProps {
  resend: () => void;
  submit: (code: string) => void;
}

function Verify({ resend, submit }: VerifyProps) {
  const codeLength = 5;

  type FieldType = `${1 | 2 | 3 | 4 | 5}`;
  type FormType = { [K in FieldType]: string };

  const defaultValues: FormType = {} as FormType;
  for (let i = 1; i <= codeLength; i += 1)
    defaultValues[i.toString() as FieldType] = '';

  const fieldIDs: string[] = [];
  for (let i = 1; i <= codeLength; i += 1) fieldIDs.push(`textField_${i}`);

  const fields = Array.from({ length: codeLength }, (_, i) =>
    (i + 1).toString(),
  ) as FieldType[];

  const { control, handleSubmit, reset, getValues } = useForm<FormType>({
    defaultValues,
  });

  const handleResend = () => {
    reset();
    resend();
  };

  const onSubmitHandler: SubmitHandler<FormType> = (data) => {
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

  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Verify your email
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2} alignItems='center'>
          <Typography textAlign='center'>
            Please enter the code sent to your email
          </Typography>

          <Stack direction='row' spacing={0.5}>
            {fields.map((num) => (
              <Controller
                key={num}
                name={num}
                control={control}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <TextField
                    {...{ name, onBlur, value }}
                    inputRef={ref}
                    id={fieldIDs[parseInt(name, 10) - 1]}
                    autoFocus={name === '1'}
                    onChange={(e) => {
                      const val = allowOnlyOneNumber(e.target.value);
                      onChange(val);
                      handleFieldChange(e, val);
                    }}
                    variant='outlined'
                    size='small'
                    sx={{ width: 40 }}
                  />
                )}
              />
            ))}
          </Stack>

          <Button type='submit' variant='contained'>
            Confirm
          </Button>

          <Typography
            component={Button}
            textTransform='none'
            onClick={handleResend}
          >
            Resend Code
          </Typography>
        </Stack>
      </form>
    </>
  );
}

export default Verify;
