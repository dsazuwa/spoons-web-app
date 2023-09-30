import Stack from '@mui/material/Stack';

import SandwichCategorySkeleton from './SandwichCategorySkeleton';
import SandwichCategoryView from './SandwichCategoryView';

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
    <div id='sandwiches'>
      <Stack alignItems='center' spacing={1.5}>
        {isLoading || isFetching || data === undefined ? (
          <SandwichCategorySkeleton />
        ) : (
          <SandwichCategoryView data={data} />
        )}
      </Stack>
    </div>
  );
}

export default SandwichCategory;
