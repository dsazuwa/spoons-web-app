import { useRouter } from 'next/router';

import FullScreenLoader from '@components/FullScreenLoader';
import getClientLayout from '@layout/ClientLayout';

import useAuthentication from '@hooks/useAuthentication';

function Account() {
  const router = useRouter();
  const { authReady, isAuthenticated } = useAuthentication();

  if (!authReady) return <FullScreenLoader />;

  if (!isAuthenticated) {
    router.push('/login');
    return;
  }

  return <div>Account</div>;
}

Account.getLayout = getClientLayout;

export default Account;
