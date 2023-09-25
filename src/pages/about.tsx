import getCustomerLayout from '@layout/CustomerLayout';

function About() {
  return getCustomerLayout(
    <div>About</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default About;
