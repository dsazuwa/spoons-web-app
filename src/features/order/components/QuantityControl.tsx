import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import {
  addCartItem,
  decrementQuantity,
  incrementQuantity,
  setQuantity,
} from '@store/slices';
import formatPrice from '@utils/formatPrice';
import { getItemSelectionPrice, getSelections } from '../state';
import * as S from './QuantityControl.styled';

interface QuantityControlProps {
  current: ItemNode;
  handleClose: () => void;
}

function QuantityControl({ current, handleClose }: QuantityControlProps) {
  const { key, itemId, name, photoUrl, price, quantity, isValid } = current;

  const dispatch = useDispatch();
  const map = useSelector((state: RootState) => state.orderState.map);

  const limitDigits = (value: string) => value.replace(/\D/g, '').slice(0, 3);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const val = limitDigits(e.target.value);
    dispatch(
      setQuantity({
        key: current.key,
        quantity: Number.parseInt(val || '1', 10),
      }),
    );
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(key));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(key));
  };

  const handleAddToCart = () => {
    const item = {
      id: itemId,
      name,
      photoUrl,
      price,
      selections: getSelections(map, current),
    };

    dispatch(addCartItem({ item, quantity }));
    handleClose();
  };

  const scrollToUnfulfilled = () => {
    const firstUnfulfilled = document.querySelector('.unfulfilled-modifier');

    if (firstUnfulfilled)
      firstUnfulfilled.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = () => {
    if (isValid) handleAddToCart();
    else scrollToUnfulfilled();
  };

  return (
    <div className='dialog-footer item-dialog-footer'>
      <S.IconButton disabled={quantity === 1} onClick={handleDecrement}>
        <RemoveCircleOutlineIcon />
      </S.IconButton>

      <S.TextField
        id='num-items'
        variant='outlined'
        value={quantity}
        onChange={handleChange}
      />

      <S.IconButton disabled={quantity === 999} onClick={handleIncrement}>
        <AddCircleOutlineOutlinedIcon />
      </S.IconButton>

      <Button
        variant='contained'
        className='dialog-footer-button add-to-cart'
        onClick={handleClick}
      >
        Add to cart -
        {formatPrice(getItemSelectionPrice(map, current) * quantity)}
      </Button>
    </div>
  );
}

export default QuantityControl;
