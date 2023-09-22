import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useLogoutUserMutation } from '@features/user/api';

const useLogout = (shouldReturnHome: boolean) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [logout, { isLoading, isSuccess, isError }] = useLogoutUserMutation();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    // TODO: handle logout error

    if (shouldReturnHome && (isSuccess || isError)) router.push('/');
  }, [isError, isSuccess, router, shouldReturnHome, dispatch]);

  return { handleLogout, isLoading };
};

export default useLogout;
