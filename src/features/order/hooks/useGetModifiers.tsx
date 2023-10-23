import { useLazyGetItemModifiersQuery } from '@store/api';

const useGetModifiers = () => {
  const [trigger, { data, isLoading, isFetching }] =
    useLazyGetItemModifiersQuery();

  return {
    trigger,
    isLoading,
    isFetching,
    data,
  };
};

export default useGetModifiers;
