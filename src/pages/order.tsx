import getClientLayout from '@layout/ClientLayout';

function Order() {
  return getClientLayout(
    <div>Order</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Order;
