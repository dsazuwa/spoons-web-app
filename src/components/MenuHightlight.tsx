import Button from '@mui/material/Button';

import ItemGrid from '@features/menu/components/ItemGrid';
import * as S from './MenuHighlight.syled';

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
      tags: [],
      photoUrl: 'NotSoFriedChicken.jpg',
    },
  ] as MenuItemType[];

  return (
    <S.Div>
      <div className='box'>
        <div className='header'>Most Popular Items</div>

        <div className='content'>
          <ItemGrid items={items} />

          <Button className='menu-btn' variant='contained'>
            View Menu
          </Button>
        </div>
      </div>
    </S.Div>
  );
}

export default MenuHightlight;
