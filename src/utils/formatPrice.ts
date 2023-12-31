const formatPrice = (number: number) =>
  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default formatPrice;
