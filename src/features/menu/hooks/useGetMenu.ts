import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { useGetMenuQuery } from '@store/api';

const useGetMenu = () => {
  const cache = useSelector((state: RootState) => state.menuState.menu);
  const isCached = cache.menu !== undefined && cache.menu.length !== 0;

  const { isFetching, isLoading, data } = useGetMenuQuery(undefined, {
    skip: isCached,
    refetchOnMountOrArgChange: true,
  });

  return { isFetching, isLoading, data: isCached ? cache : data };
};

export default useGetMenu;
