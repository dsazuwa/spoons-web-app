import { useSelector } from 'react-redux';

import { RootState } from '@store';
import { useGetMenuQuery } from '../api/menu.api';

const useGetMenu = () => {
  const cachedMenu = useSelector((state: RootState) => state.menuState.menu);
  const isCached = cachedMenu !== undefined;

  const {
    isFetching,
    isLoading,
    data: retrievedData,
  } = useGetMenuQuery(undefined, {
    skip: isCached,
    refetchOnMountOrArgChange: true,
  });

  const data = isCached ? { menu: cachedMenu } : retrievedData;

  return { isFetching, isLoading, data };
};

export default useGetMenu;
