import Grid from '@mui/material/Grid';

import Item from './Item';

function ItemGrid({ items }: { items: PublicMenuItemType[] }) {
  const check = (i: number, m: number) => (i + 1) % m !== 0;

  return (
    <Grid container justifyContent={{ xs: 'center', sm: 'initial' }}>
      {items.map((item, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          paddingRight={{
            xs: check(index, 1) ? '15px' : 0,
            sm: check(index, 2) ? '15px' : 0,
            md: check(index, 3) ? '15px' : 0,
          }}
          paddingTop='10px'
        >
          <Item key={index} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ItemGrid;
