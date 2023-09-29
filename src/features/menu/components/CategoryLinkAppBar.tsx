import AppBar from '@mui/material/AppBar';

import palette from '@utils/palette';
import CategoryLinkList from './CategoryLinkList';

function CategoryLinkAppBar() {
  return (
    <AppBar
      elevation={0}
      position='fixed'
      sx={{
        backgroundColor: palette.base.white,
        padding: '10px',
        marginTop: '56px',
      }}
    >
      <CategoryLinkList />
    </AppBar>
  );
}

export default CategoryLinkAppBar;
