import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CodeInputField from '@components/CodeInputField';
import useVerify from '@hooks/useVerify';

interface VerifyFormProps {
  contactMethod: 'email' | 'phone number';
  resend: () => void;
  submit: (code: string) => void;
}

function VerifyCodeForm({ contactMethod, resend, submit }: VerifyFormProps) {
  const {
    fields,
    fieldIDs,
    control,
    allowOnlyOneNumber,
    onSubmitHandler,
    handleSubmit,
    handleResend,
    handleFieldChange,
  } = useVerify(resend, submit);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Stack spacing={2} alignItems='center'>
        <Typography textAlign='center'>
          Please enter the code sent to your {contactMethod}
        </Typography>

        <CodeInputField
          control={control}
          fields={fields}
          fieldIDs={fieldIDs}
          allowOnlyOneNumber={allowOnlyOneNumber}
          handleFieldChange={handleFieldChange}
        />

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
  );
}

export default VerifyCodeForm;
