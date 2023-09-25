import HomePageContent from '@components/page-content/HomePageContent';
import getClientLayout from '@layout/ClientLayout';

const Home = () => {
  return getClientLayout(
    <HomePageContent />,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
};

export default Home;
