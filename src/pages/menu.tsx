import { MenuPageContent } from '@features/menu';
import getCustomerLayout from '@layout/CustomerLayout';

function Menupage() {
  return getCustomerLayout(
    <MenuPageContent />,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Menupage;
