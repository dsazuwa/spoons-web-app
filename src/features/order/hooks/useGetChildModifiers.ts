import { useLazyGetChildModifierQuery } from '@store/api';

const useGetChildModifiers = () => {
  const [trigger, { data, isLoading, isFetching }] =
    useLazyGetChildModifierQuery(undefined);

  return {
    trigger,
    isLoading,
    isFetching,
    data,
  };
};

export default useGetChildModifiers;
