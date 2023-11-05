import * as S from './CartPanel.styled';

function CartPanel() {
  return (
    <>
      <S.DivPlaceholder />

      <S.Div>
        <div className='inset-box'>
          <div className='mb-16'>
            <div className='caption'>Your cart from</div>

            <div className='restaurant-name'>Mendocino Farms</div>
          </div>

          <S.CheckoutButton variant='contained'>
            <div>Checkout</div>
            <div>$0</div>
          </S.CheckoutButton>
        </div>
      </S.Div>
    </>
  );
}

export default CartPanel;
