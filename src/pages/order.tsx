import getCustomerLayout from '@layout/CustomerLayout';

function Order() {
  return getCustomerLayout(
    <div>Order</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Order;
