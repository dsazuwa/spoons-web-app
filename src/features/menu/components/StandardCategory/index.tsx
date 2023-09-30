import Stack from '@mui/material/Stack';

import StandardCategorySkeleton from './StandardCategorySkeleton';
import StandardCategoryView from './StandardCategoryView';

interface StandardCategoryProps {
  isLoading: boolean;
  isFetching: boolean;
  data: GroupedMenuResponseType | undefined;
  name: string;
}

function StandardCategory({
  isLoading,
  isFetching,
  data,
  name,
}: StandardCategoryProps) {
  return (
    <div id={name}>
      <Stack alignItems='center' spacing={{ xs: 1, sm: 1.5 }}>
        {isLoading || isFetching || data === undefined ? (
          <StandardCategorySkeleton />
        ) : (
          <StandardCategoryView data={data} name={name} />
        )}
      </Stack>
    </div>
  );
}

export default StandardCategory;
