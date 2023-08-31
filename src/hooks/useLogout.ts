import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useLogoutUserMutation } from '@store/services/authApi';
import { logout as clearStore } from '@store/slices/userSlice';

const useLogout = (shouldReturnHome: boolean) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [logout, { isLoading, isSuccess, isError }] = useLogoutUserMutation();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (isError) {
      deleteCookie('access-token');
      dispatch(clearStore());
    }

    if (shouldReturnHome && (isSuccess || isError)) router.push('/');
  }, [isError, isSuccess, router, shouldReturnHome, dispatch]);

  return { handleLogout, isLoading };
};

export default useLogout;
