import { useEffect, useState } from 'react';

import useAuthentication from './useAuthentication';
import useLogout from './useLogout';

const useClientAppBar = () => {
  const [auth, setAuth] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  const { isAuthenticated, isSkipped, isError, isSuccess } =
    useAuthentication();

  useEffect(() => {
    if (isSuccess || isSkipped) {
      setAuth(isAuthenticated);
      setAuthReady(true);
    }

    if (isError) setAuthReady(true);
  }, [setAuth, isAuthenticated, isSkipped, isError, isSuccess]);

  const { handleLogout } = useLogout(false);

  return { auth, authReady, handleLogout };
};

export default useClientAppBar;
