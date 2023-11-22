import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import ItemGrid from '@features/menu/components/ItemGrid';
import palette from '@utils/palette';
import { NextLinkComposed } from './Link';

const Div = styled('div')(({ theme }) => ({
  '& .box': {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '64px 16px',
  },

  '& .content': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  '& .header': {
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
    width: '100%',
    color: palette.primary[900],
    marginBottom: '16px',
  },

  '& .menu-btn': {
    fontSize: '10px',
    marginTop: '16px',
    borderRadius: '24px',
    textTransform: 'capitalize',
  },

  [theme.breakpoints.up('md')]: {
    '& .box': { padding: '64px 32px' },
    '& .header': { marginBottom: '24px', fontSize: '32px' },
    '& .menu-btn': { fontSize: '14px' },
  },
}));

function MenuHightlight() {
  const items = [
    {
      name: 'Avocado & Quinoa Superfood',
      description:
        'Chopped romaine, curly kale, quinoa & millet, housemade superfood krunchies, succotash with roasted corn, black beans & jicama, red onions, cilantro, cotija cheese, grape tomatoes, avocado (400 cal) with chipotle vinaigrette (250 cal)',
      tags: ['VG', 'GF'],
      photoUrl: 'AvoQuinoa.jpg',
    },

    {
      name: 'The Impossible Taco Salad',
      description:
        'Plant-based Impossible chorizo, housemade superfood krunchies, chopped romaine, curly kale, succotash with roasted corn, black beans & jicama, red onions, cilantro, grape tomatoes, avocado (400 cal) with house vegan chipotle ranch (240 cal)',
      tags: ['V', 'GF'],
      photoUrl: 'ImpossibleTaco.jpg',
    },

    {
      name: '1/2 “Not So Fried” Chicken',
      description:
        "Shaved, roasted chicken breast topped with Mendo's krispies, herb aioli, mustard pickle slaw, tomatoes, pickled red onions on toasted ciabatta (450 cal) with a side of tangy mustard barbecue sauce (80 cal) or mustard pickle remoulade (120 cal)",
      tags: null,
      photoUrl: 'NotSoFriedChicken.jpg',
    },
  ] as MenuItemType[];

  return (
    <Div>
      <div className='box'>
        <div className='header'>Crowd Favorites!</div>

        <div className='content'>
          <ItemGrid items={items} />

          <Button
            className='menu-btn'
            variant='contained'
            component={NextLinkComposed}
            to={{ pathname: '/menu' }}
          >
            View Menu
          </Button>
        </div>
      </div>
    </Div>
  );
}

export default MenuHightlight;
