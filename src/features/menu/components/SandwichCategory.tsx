import Stack from '@mui/material/Stack';

import SandwichCategorySkeleton from './skelentons/SandwichCategorySkeleton';
import SandwichCategoryView from './views/SandwichCategoryView';

interface SandwichCategoryProps {
  isLoading: boolean;
  isFetching: boolean;
  data: GroupedMenuResponseType | undefined;
}

function SandwichCategory({
  isLoading,
  isFetching,
  data,
}: SandwichCategoryProps) {
  return (
    <Stack alignItems='center' spacing={1.5} paddingTop='15px'>
      {isLoading || isFetching || data === undefined ? (
        <SandwichCategorySkeleton />
      ) : (
        <SandwichCategoryView data={data} />
      )}
    </Stack>
  );
}

export default SandwichCategory;
