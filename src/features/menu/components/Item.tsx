import Box from '@mui/material/Box';
import { useState } from 'react';

import * as S from './Item.styled';
import ItemTag from './ItemTag';
import ImageSkeleton from './skeletons/ImageSkeleton';

function Item({ item }: { item: MenuItemType }) {
  const { name, description, tags, photoUrl, notes } = item;
  const [loaded, setLoaded] = useState(false);

  return (
    <S.Item>
      <div>
        {loaded ? null : <ImageSkeleton />}
        <Box
          component='img'
          src={`/menu-items/${photoUrl}`}
          alt={name}
          width='100%'
          borderRadius='4px'
          sx={loaded ? {} : { display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className='name'>{name}</div>

      {tags && <ItemTag className='item-mt' tags={tags} />}

      <div className='description item-mt'>{description}</div>

      {notes && <div className='description item-mt'>{notes}</div>}
    </S.Item>
  );
}

export default Item;
