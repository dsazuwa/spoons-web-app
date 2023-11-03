import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';

import useQuantityControl from '../hooks/useQuantityControl';
import * as S from './QuantityControl.styled';

function QuantityControl({ price }: { price: number }) {
  const { quantity, setQuantity, incrementQuantity, decrementQuantity } =
    useQuantityControl();

  return (
    <div className='dialog-footer item-dialog-footer'>
      <S.IconButton disabled={quantity === 1} onClick={decrementQuantity}>
        <RemoveCircleOutlineIcon />
      </S.IconButton>

      <S.TextField
        id='num-items'
        variant='outlined'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <S.IconButton disabled={quantity === 999} onClick={incrementQuantity}>
        <AddCircleOutlineOutlinedIcon />
      </S.IconButton>

      <Button variant='contained' className='dialog-footer-button'>
        Add to cart - ${(price * quantity).toFixed(2)}
      </Button>
    </div>
  );
}

export default QuantityControl;
