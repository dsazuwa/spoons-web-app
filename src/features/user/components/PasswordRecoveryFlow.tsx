import VerifyEmail from './common/VerifyEmail';
import ChangePassword from './forms/ChangePasswordForm';
import ForgotPasswordForm from './forms/ForgotPasswordForm';

interface RecoveryFlowProps {
  step: number;
  handleRequestRecovery: (data: string) => void;
  handleResendRecovery: () => void;
  handleVerifySubmit: (data: string) => void;
  handleRecoverSubmit: (data: string) => void;
}

function PasswordRecoveryFlow({
  step,
  handleRequestRecovery,
  handleResendRecovery,
  handleVerifySubmit,
  handleRecoverSubmit,
}: RecoveryFlowProps) {
  if (step === 1) return <ForgotPasswordForm submit={handleRequestRecovery} />;
  if (step === 2)
    return (
      <VerifyEmail resend={handleResendRecovery} submit={handleVerifySubmit} />
    );
  return <ChangePassword submit={handleRecoverSubmit} />;
}

export default PasswordRecoveryFlow;
