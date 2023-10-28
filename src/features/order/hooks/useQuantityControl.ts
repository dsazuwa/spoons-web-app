import { useState } from 'react';

const useQuantityControl = () => {
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
  return {
    quantity,
    setQuantity: handleChange,
    incrementQuantity,
    decrementQuantity,
  };
};

export default useQuantityControl;
