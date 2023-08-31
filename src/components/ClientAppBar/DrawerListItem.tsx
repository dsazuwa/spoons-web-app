import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NextLinkComposed } from '@components/Link';

interface DrawerListItemProps {
  page: { name: string; href: string; icon: JSX.Element };
  handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function DrawerListItem({ page, handleClick }: DrawerListItemProps) {
  const prop =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: page.href } }
      : { onClick: handleClick };

  return (
    <ListItem disablePadding>
      <ListItemButton {...prop}>
        <ListItemIcon>{page.icon}</ListItemIcon>
        <ListItemText primary={page.name} />
      </ListItemButton>
    </ListItem>
  );
}

export default DrawerListItem;
