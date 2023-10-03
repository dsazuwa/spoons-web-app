import { OrderPageContent } from '@features/order';
import getCustomerLayout from '@layout/CustomerLayout';

function Order() {
  return getCustomerLayout(
    <OrderPageContent />,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Order;
