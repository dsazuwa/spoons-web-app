import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '& .tag-mx': { margin: '0 4px' },

  '& .tag': {
    color: palette.grey[500],
    fontSize: '10px',
    fontWeight: 600,
  },

  '& .tag-divider': { backgroundColor: palette.grey[300] },

  [theme.breakpoints.up('sm')]: { '& .tag': { fontSize: '12px' } },
  [theme.breakpoints.up('md')]: { '& .tag': { fontSize: '13px' } },
}));

function ItemTag({ tags, className }: { tags: string[]; className: string }) {
  return (
    <Div className={className}>
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <div className='tag tag-mx'>{tag}</div>

          {index < tags.length - 1 && (
            <Divider
              className='tag-mx tag-divider'
              orientation='vertical'
              variant='middle'
              flexItem
            />
          )}
        </React.Fragment>
      ))}
    </Div>
  );
}

export default ItemTag;
