import getCustomerLayout from '@layout/CustomerLayout';

function Menupage() {
  return getCustomerLayout(
    <div>Menu</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Menupage;
