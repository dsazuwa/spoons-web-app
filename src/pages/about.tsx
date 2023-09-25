import getClientLayout from '@layout/ClientLayout';

function About() {
  return getClientLayout(
    <div>About</div>,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default About;
