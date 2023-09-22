import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetUserQuery } from '@features/user/api';
import { RootState } from '@store';

const useAuthentication = () => {
  const [authReady, setAuthReady] = useState(false);

  const cachedUser = useSelector((state: RootState) => state.userState.user);
  const accessToken = getCookie('auth-flag');
  const isSkipped =
    accessToken === undefined || (!!accessToken && cachedUser !== undefined);

  const { data, isLoading, isFetching, isError, isSuccess } = useGetUserQuery(
    undefined,
    {
      skip: isSkipped,
      refetchOnMountOrArgChange: true,
    },
  );

  const isAuthenticated =
    accessToken !== undefined &&
    (cachedUser !== undefined || data !== undefined);

  const user = isError ? undefined : cachedUser ?? data ?? undefined;

  useEffect(() => {
    if (isSuccess || isSkipped || isError) setAuthReady(true);
  }, [setAuthReady, isSuccess, isSkipped, isError]);

  return {
    authReady,
    isAuthenticated,
    user,
    isSkipped,
    isLoading,
    isFetching,
    isError,
    isSuccess,
  };
};

export default useAuthentication;
