import Stack from '@mui/material/Stack';

import { IGroupedMenuResponse } from '../api/types';
import SandwichCategorySkeleton from './skelentons/SandwichCategorySkeleton';
import SandwichCategoryView from './views/SandwichCategoryView';

interface SandwichCategoryProps {
  isLoading: boolean;
  isFetching: boolean;
  data: IGroupedMenuResponse | undefined;
}

function SandwichCategory({
  isLoading,
  isFetching,
  data,
}: SandwichCategoryProps) {
  return (
    <Stack alignItems='center' spacing={1.5}>
      {isLoading || isFetching || data === undefined ? (
        <SandwichCategorySkeleton />
      ) : (
        <SandwichCategoryView data={data} />
      )}
    </Stack>
  );
}

export default SandwichCategory;
