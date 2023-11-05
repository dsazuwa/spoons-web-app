import CartPanel from './components/CartPanel';
import Menu from './components/Menu';

function OrderPageContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Menu />

      <CartPanel />
    </div>
  );
}

export default OrderPageContent;
