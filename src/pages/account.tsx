import { useRouter } from 'next/router';

import getCustomerLayout from '@layout/CustomerLayout';
import useAuthentication from '@hooks/useAuthentication';

function Account() {
  const router = useRouter();
  const { authReady, isAuthenticated } = useAuthentication();

  return getCustomerLayout(
    <div>Account</div>,
    { pageAccess: 'private', router },
    authReady,
    isAuthenticated,
  );
}

export default Account;
