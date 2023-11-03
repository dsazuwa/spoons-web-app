import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import Item from './Item';

const CategoryHeader = styled(Typography)(({ theme }) => ({
  color: palette.primary[900],
  textTransform: 'uppercase',
  fontWeight: 1000,
  paddingLeft: '10px',

  letterSpacing: 3,
  fontSize: '1em',

  [theme.breakpoints.only('xs')]: {
    letterSpacing: 2,
    fontSize: '0.8em',
  },

  [theme.breakpoints.only('sm')]: {
    letterSpacing: 2.5,
    fontSize: '0.9em',
  },
}));

interface CategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function Category({ index, menu }: CategoryProps) {
  const { category, items } = menu[index];

  return (
    <Stack
      id={category}
      direction='column'
      spacing={1}
      paddingTop={{ xs: '5px', sm: '10px', md: '10px' }}
    >
      <CategoryHeader>{category}</CategoryHeader>

      <Grid container>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Item key={index} item={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Category;
