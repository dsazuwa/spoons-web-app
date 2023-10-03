import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { NextLinkComposed } from '@components/Link';

import { PageType } from '.';

interface AppBarButtonProp {
  page: PageType;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  sx?: SxProps;
}

function AppBarButton({ page, handleClick, sx }: AppBarButtonProp) {
  const { name, href } = page;

  const prop =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: href } }
      : { onClick: handleClick };

  return (
    <Button {...prop} sx={{ color: 'white', ...sx }}>
      {name}
    </Button>
  );
}

export default AppBarButton;
