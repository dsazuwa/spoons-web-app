import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';

import * as S from './CartItem.styled';

function CartItem() {
  const item = {
    name: 'Build Your Own Salad',
    options:
      'Hand-Carved Steak, Salad Style, Spinach, Citrus Vinaigrette, Cheddar, Aji Amarillo Sauce, Tangy Mustard BBQ Sauce, Apple, Beets, Black Bean, Roasted Corn & Jicama Succotash, Aji Amarillo Steak',
    photoUrl: 'BuildSalad.jpg',
    price: 26.63,
    quantity: 999,
  };

  const { name, options, photoUrl, price, quantity } = item;

  return (
    <S.Grid container>
      <Grid item className='item-image-box'>
        <img className='item-image' src={`/menu-items/${photoUrl}`} />
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