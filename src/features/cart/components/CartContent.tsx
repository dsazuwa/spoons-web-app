import * as S from './CartContent.styled';
import CartItem from './CartItem';

function CartContent() {
  return (
    <S.Div>
      <div className='mb-16'>
        <div className='caption'>Your cart from</div>

        <div className='restaurant-name'>Mendocino Farms</div>
      </div>

      <S.CheckoutButton variant='contained'>
        <div>Checkout</div>
        <div>$0</div>
      </S.CheckoutButton>

      <CartItem />
    </S.Div>
  );
}

export default CartContent;
