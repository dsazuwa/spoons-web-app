import AccountCircle from '@mui/icons-material/AccountCircle';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import Login from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBook from '@mui/icons-material/MenuBook';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import useAuthentication from '@hooks/useAuthentication';
import useLogout from '@hooks/useLogout';

/* eslint-disable @typescript-eslint/ban-types */
export type PageType = {
  name: string;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
};
/* eslint-enable @typescript-eslint/ban-types */

export type AuthPageType = {
  page: PageType;
  handleLogout?: () => void;
};

const useClientAppBar = () => {
  const { authReady, isAuthenticated } = useAuthentication();
  const { handleLogout } = useLogout(false);

  const pages: PageType[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Menu', href: '/menu', icon: MenuBook },
    { name: 'Order', href: '/order', icon: ReceiptLong },
    { name: 'About', href: '/about', icon: Info },
  ];

  const authPages: AuthPageType[] = [
    {
      page: { name: 'Account', href: '/account', icon: AccountCircle },
      handleLogout: undefined,
    },
    {
      page: { name: 'Log Out', href: '', icon: LogoutIcon },
      handleLogout,
    },
  ];

  const unauthPages: PageType[] = [
    { name: 'Log In', href: '/login', icon: Login },
    { name: 'Sign Up', href: '/register', icon: PersonAddAlt },
  ];

  return { authReady, isAuthenticated, pages, authPages, unauthPages };
};

export default useClientAppBar;
