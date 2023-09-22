import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useVerify from '@hooks/useVerify';
import CodeInputField from './CodeInputField';

interface VerifyProps {
  resend: () => void;
  submit: (code: string) => void;
}

const Verify = ({ resend, submit }: VerifyProps) => {
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

          <CodeInputField
            {...{
              control,
              fields,
              fieldIDs,
              allowOnlyOneNumber,
              handleFieldChange,
            }}
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
    </>
  );
};

export default Verify;
