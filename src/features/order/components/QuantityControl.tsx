import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';

import { addCartItem } from '@store/slices';
import formatPrice from '@utils/formatPrice';
import { useDispatch } from 'react-redux';
import { ItemNode } from '../treeState';
import * as S from './QuantityControl.styled';

interface QuantityControlProps {
  current: ItemNode;
  handleClose: () => void;
  setQuantity: (key: string, amount: number) => void;
  incrementQuantity: (key: string) => void;
  decrementQuantity: (key: string) => void;
}

function QuantityControl({
  current,
  handleClose,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityControlProps) {
  const dispatch = useDispatch();

  const allowOneToThreeDigits = (value: string) =>
    value.replace(/\D/g, '').slice(0, 3);

  const handleChange = (value: string) => {
    const val = allowOneToThreeDigits(value);
    setQuantity(current.getKey(), Number.parseInt(val || '1', 10));
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

      dispatch(addCartItem({ item, quantity: current.getQuantity() }));

      handleClose();
    } else {
      const elements = document.getElementsByClassName('unfulfilled-modifier');

      if (elements.length > 0)
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='dialog-footer item-dialog-footer'>
      <S.IconButton
        disabled={current.getQuantity() === 1}
        onClick={() => decrementQuantity(current.getKey())}
      >
        <RemoveCircleOutlineIcon />
      </S.IconButton>

      <S.TextField
        id='num-items'
        variant='outlined'
        value={current.getQuantity()}
        onChange={(e) => handleChange(e.target.value)}
      />

      <S.IconButton
        disabled={current.getQuantity() === 999}
        onClick={() => incrementQuantity(current.getKey())}
      >
        <AddCircleOutlineOutlinedIcon />
      </S.IconButton>

      <Button
        variant='contained'
        className='dialog-footer-button'
        onClick={addToCartHandler}
      >
        Add to cart -{' '}
        {formatPrice(current.getSelectionPrice() * current.getQuantity())}
      </Button>
    </div>
  );
}

export default QuantityControl;
