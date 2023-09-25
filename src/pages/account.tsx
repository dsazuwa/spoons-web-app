import { useRouter } from 'next/router';

import getClientLayout from '@layout/ClientLayout';
import useAuthentication from '@hooks/useAuthentication';

function Account() {
  const router = useRouter();
  const { authReady, isAuthenticated } = useAuthentication();

  return getClientLayout(
    <div>Account</div>,
    { pageAccess: 'private', router },
    authReady,
    isAuthenticated,
  );
}

export default Account;
