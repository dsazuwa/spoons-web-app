import { useSelector } from 'react-redux';

import { RootState } from '@store';
import formatPrice from '@utils/formatPrice';
import * as S from './CartContent.styled';
import CartItem from './CartItem';

function CartContent() {
  const { cart, total } = useSelector((state: RootState) => state.cartState);

  return (
    <S.Div>
      <div className='mb-16'>
        <div className='caption'>Your cart from</div>

        <div className='restaurant-name'>Mendocino Farms</div>
      </div>

      <S.CheckoutButton variant='contained'>
        <div>Checkout</div>
        <div>{formatPrice(total)}</div>
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
