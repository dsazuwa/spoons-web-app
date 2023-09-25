import HomePageContent from '@components/page-content/HomePageContent';
import getCustomerLayout from '@layout/CustomerLayout';

const Home = () => {
  return getCustomerLayout(
    <HomePageContent />,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
};

export default Home;
