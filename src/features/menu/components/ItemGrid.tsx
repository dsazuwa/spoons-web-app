import Grid from '@mui/material/Grid';

import Item from './Item';

function ItemGrid({ items }: { items: MenuItemType[] }) {
  return (
    <Grid container>
      {items.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Item key={index} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemGrid;
