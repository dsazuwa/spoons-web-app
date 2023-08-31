import { deleteCookie, getCookie } from 'cookies-next';
import { useSelector } from 'react-redux';

import { useGetUserQuery } from '@store/services/userApi';
import { RootState } from '@store/store';

const useAuthentication = () => {
  const cachedUser = useSelector((state: RootState) => state.userState.user);
  const accessToken = getCookie('access-token');
  const isSkipped =
    accessToken === undefined || (!!accessToken && cachedUser !== undefined);

  const { data, isLoading, isFetching, isError, isSuccess } = useGetUserQuery(
    undefined,
    {
      skip: isSkipped,
      refetchOnMountOrArgChange: true,
    },
  );

  if (isError) deleteCookie('access-token');

  const isAuthenticated =
    accessToken !== undefined &&
    (cachedUser !== undefined || data !== undefined);

  const user = isError ? undefined : cachedUser ?? data ?? undefined;

  return {
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
