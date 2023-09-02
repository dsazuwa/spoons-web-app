export * from './api';

import Verify from './components/Verify';

import useAuthentication from './hooks/useAuthentication';
import useLogin from './hooks/useLogin';
import useLogout from './hooks/useLogout';
import useRegister from './hooks/useRegister';
import useVerifyEmail from './hooks/useVerifyEmail';

export {
  Verify,
  useAuthentication,
  useLogin,
  useLogout,
  useRegister,
  useVerifyEmail,
};
