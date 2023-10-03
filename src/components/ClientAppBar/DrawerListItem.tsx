import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NextLinkComposed } from '@components/Link';
import { PageType } from '.';

interface DrawerListItemProps {
  page: PageType;
  handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function DrawerListItem({ page, handleClick }: DrawerListItemProps) {
  const { name, href, icon: IconElement } = page;

  const prop =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: href } }
      : { onClick: handleClick };

  return (
    <ListItem disablePadding>
      <ListItemButton {...prop}>
        <ListItemIcon>
          <IconElement />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default DrawerListItem;
