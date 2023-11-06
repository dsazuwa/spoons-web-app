import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { TCartItem, decrementCartItem, incrementCartItem } from '@store/slices';
import formatPrice from '@utils/formatPrice';
import * as S from './CartItem.styled';

interface CartItemProps {
  index: number;
  item: TCartItem;
  quantity: number;
}

function CartItem({ index, item, quantity }: CartItemProps) {
  const { name, options, price, photoUrl } = item;

  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(incrementCartItem(index));
  };

  const decrementQuantity = () => {
    dispatch(decrementCartItem(index));
  };

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
        <div className='item-price'>{formatPrice(price * quantity)}</div>
      </Grid>

      <Grid item>
        <S.QuantityControl>
          <S.ActionButton onClick={decrementQuantity}>
            {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
          </S.ActionButton>

          <div className='item-quantity'>{quantity}x</div>

          <S.ActionButton
            disabled={quantity === 999}
            onClick={incrementQuantity}
          >
            <AddIcon />
          </S.ActionButton>
        </S.QuantityControl>
      </Grid>
    </S.Grid>
  );
}

export default CartItem;
