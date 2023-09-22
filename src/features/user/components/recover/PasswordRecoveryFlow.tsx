import Verify from '../Verify';
import ChangePassword from './ChangePasswordForm';
import ForgotPasswordForm from './ForgotPasswordForm';

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
    return <Verify resend={handleResendRecovery} submit={handleVerifySubmit} />;
  return <ChangePassword submit={handleRecoverSubmit} />;
}

export default PasswordRecoveryFlow;
