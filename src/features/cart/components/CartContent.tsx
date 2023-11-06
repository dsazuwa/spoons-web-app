import { useSelector } from 'react-redux';

import { RootState } from '@store';
import * as S from './CartContent.styled';
import CartItem from './CartItem';

function CartContent() {
  const cart = useSelector((state: RootState) => state.cartState.cart);
  const total = useSelector((state: RootState) => state.cartState.total);

  return (
    <S.Div>
      <div className='mb-16'>
        <div className='caption'>Your cart from</div>

        <div className='restaurant-name'>Mendocino Farms</div>
      </div>

      <S.CheckoutButton variant='contained'>
        <div>Checkout</div>
        <div>${total.toFixed(2)}</div>
      </S.CheckoutButton>

      {cart.map(({ item, quantity }, index) => (
        <CartItem
          key={`cart-item-${index}`}
          index={index}
          item={item}
          quantity={quantity}
        />
      ))}
    </S.Div>
  );
}

export default CartContent;
