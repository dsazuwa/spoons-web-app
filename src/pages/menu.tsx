import getClientLayout from '@layout/ClientLayout';

function Menupage() {
  return getClientLayout(
    <div>Menu</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Menupage;
