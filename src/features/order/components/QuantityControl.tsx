import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import { useState } from 'react';

import { addCartItem } from '@store/slices';
import { useDispatch } from 'react-redux';
import { ItemNode } from '../treeState';
import * as S from './QuantityControl.styled';

interface QuantityControlProps {
  current: ItemNode;
  handleClose: () => void;
}

function QuantityControl({ current, handleClose }: QuantityControlProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const allowOneToThreeDigits = (value: string) =>
    value.replace(/\D/g, '').slice(0, 3);

  const handleChange = (value: string) => {
    const val = allowOneToThreeDigits(value);
    setQuantity(Number.parseInt(val || '1', 10));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 999));
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const addToCartHandler = () => {
    if (current.getIsValid()) {
      const item = {
        id: current.getId(),
        name: current.getName(),
        photoUrl: current.getPhotoUrl(),
        price: current.getSelectionPrice(),
        selections: current.getSelection(),
      };

      dispatch(addCartItem({ item, quantity }));

      handleClose();
    } else {
      const elements = document.getElementsByClassName('unfulfilled-modifier');

      if (elements.length > 0)
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='dialog-footer item-dialog-footer'>
      <S.IconButton disabled={quantity === 1} onClick={decrementQuantity}>
        <RemoveCircleOutlineIcon />
      </S.IconButton>

      <S.TextField
        id='num-items'
        variant='outlined'
        value={quantity}
        onChange={(e) => handleChange(e.target.value)}
      />

      <S.IconButton disabled={quantity === 999} onClick={incrementQuantity}>
        <AddCircleOutlineOutlinedIcon />
      </S.IconButton>

      <Button
        variant='contained'
        className='dialog-footer-button'
        onClick={addToCartHandler}
      >
        Add to cart - ${(current.getSelectionPrice() * quantity).toFixed(2)}
      </Button>
    </div>
  );
}

export default QuantityControl;
