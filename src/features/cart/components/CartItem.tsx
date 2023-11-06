import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { TCartItem } from '@store/slices';
import * as S from './CartItem.styled';

function CartItem({ item, quantity }: { item: TCartItem; quantity: number }) {
  const { name, options, price, photoUrl } = item;

  return (
    <S.Grid container>
      <Grid item className='item-image-box'>
        <Image
          className='item-image'
          src={`/menu-items/${photoUrl}`}
          alt={`${name}`}
          width={60}
          height={60}
        />
      </Grid>

      <Grid item xs={6} sm={6} md={7} lg={4}>
        <div className='item-name'>{name}</div>
        <div className='item-options'>{options}</div>
        <div className='item-price'>${price.toFixed(2)}</div>
      </Grid>

      <Grid item>
        <S.QuantityControl>
          <S.ActionButton>
            {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
          </S.ActionButton>

          <div className='item-quantity'>{quantity}x</div>

          <S.ActionButton>
            <AddIcon />
          </S.ActionButton>
        </S.QuantityControl>
      </Grid>
    </S.Grid>
  );
}

export default CartItem;
