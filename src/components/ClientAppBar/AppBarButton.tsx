import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { NextLinkComposed } from '@components/Link';

interface AppBarButtonProp {
  page: { name: string; href: string; icon: JSX.Element };
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  sx?: SxProps;
}

function AppBarButton({ page, handleClick, sx }: AppBarButtonProp) {
  const prop =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: page.href } }
      : { onClick: handleClick };

  return (
    <Button {...prop} sx={{ color: 'white', ...sx }}>
      {page.name}
    </Button>
  );
}

export default AppBarButton;
