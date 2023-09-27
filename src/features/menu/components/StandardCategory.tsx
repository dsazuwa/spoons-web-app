import Stack from '@mui/material/Stack';

import { IGroupedMenuResponse } from '../api/types';
import StandardCategorySkeleton from './skelentons/StandardCategorySkeleton';
import StandardCategoryView from './views/StandardCategoryView';

interface StandardCategoryProps {
  isLoading: boolean;
  isFetching: boolean;
  data: IGroupedMenuResponse | undefined;
  name: string;
}

function StandardCategory({
  isLoading,
  isFetching,
  data,
  name,
}: StandardCategoryProps) {
  return (
    <Stack alignItems='center' spacing={1.5}>
      {isLoading || isFetching || data === undefined ? (
        <StandardCategorySkeleton />
      ) : (
        <StandardCategoryView data={data} name={name} />
      )}
    </Stack>
  );
}

export default StandardCategory;
