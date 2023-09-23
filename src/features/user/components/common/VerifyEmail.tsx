import Typography from '@mui/material/Typography';
import VerifyCodeForm from '../forms/VerifyCodeForm';

interface VerifyEmailProps {
  resend: () => void;
  submit: (code: string) => void;
}

function VerifyEmail({ resend, submit }: VerifyEmailProps) {
  return (
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        Verify your email
      </Typography>

      <VerifyCodeForm contactMethod='email' resend={resend} submit={submit} />
    </>
  );
}

export default VerifyEmail;
