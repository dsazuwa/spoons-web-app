import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';

import palette from '@utils/palette';
import QuantityIconButton from './QuantityIconButton';

function ItemDialogQuantityControl() {
  const [quantity, setQuantity] = useState(1);

  const allowOneToThreeDigits = (value: string) =>
    value.replace(/\D/g, '').slice(0, 3);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const val = allowOneToThreeDigits(e.target.value);
    setQuantity(Number.parseInt(val || '1', 10));
  };

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 999));
  };

  const handleSubtractQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='center'
      spacing={{ xs: '5px', sm: '10px' }}
      sx={{
        position: 'sticky',
        bottom: 0,
        py: { xs: '10px', sm: '15px' },
        backgroundColor: palette.base.white,
        borderTop: `1px solid ${palette.grey[200]}`,
        mt: 'auto',
      }}
    >
      <QuantityIconButton
        disabled={quantity === 1}
        onClick={handleSubtractQuantity}
        icon={RemoveCircleOutlineIcon}
      />

      <TextField
        id='num-items'
        variant='outlined'
        value={quantity}
        onChange={handleChange}
        InputProps={{ sx: { borderRadius: '15px' } }}
        sx={{
          width: { xs: '75px', sm: '100px' },

          '& .MuiOutlinedInput-root': {
            background: palette.grey[100],
            '& fieldset': {
              borderColor: palette.grey[100],
            },
            '&:hover fieldset': {
              borderColor: palette.grey[100],
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.base.black,
              borderWidth: '2px',
            },
          },
          '& input': {
            color: palette.grey[800],
            padding: { xs: '13.5px 11px', sm: '16.5px 14px' },
            fontSize: { xs: '1rem', sm: '1.5rem' },
            fontWeight: '400',
            textAlign: 'center',
          },
        }}
      />

      <QuantityIconButton
        disabled={quantity === 999}
        onClick={handleAddQuantity}
        icon={AddCircleOutlineOutlinedIcon}
      />

      <Button
        variant='contained'
        sx={{
          borderRadius: '20px',
          textAlign: 'center',
          fontSize: { xs: '10px', sm: '15px' },
        }}
      >
        Add to cart
      </Button>
    </Stack>
  );
}

export default ItemDialogQuantityControl;
