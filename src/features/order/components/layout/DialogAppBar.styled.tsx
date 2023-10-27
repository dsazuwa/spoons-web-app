import { styled } from '@mui/material';

import palette from '@utils/palette';

const Div = styled('div')<{ scrolledPast: boolean }>(
  ({ scrolledPast, theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: '16px',
    backgroundColor: 'white',
    borderBottom: scrolledPast ? `1px solid ${palette.grey[200]}` : undefined,
    letterSpacing: '0.25px',

    ['svg']: {
      color: 'black',
      margin: '0 8px',
      fontSize: '.85rem',
    },

    ['& .content']: {
      height: '42px',
    },

    ['& .title']: {
      color: palette.base.black,
      fontWeight: 700,
      fontSize: '.9em',
    },

    ['& .item-name']: {
      color: palette.grey[500],
      fontWeight: 500,
      fontSize: '.75em',
    },

    ['& .option-name']: {
      color: palette.base.black,
      fontWeight: 600,
      fontSize: '.825em',
    },

    ['& .ellipsis-text']: {
      WebkitLineClamp: '1',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
    },

    [theme.breakpoints.up('sm')]: {
      padding: '24px',

      ['svg']: {
        margin: '0 8px',
        fontSize: '1.25rem',
      },

      ['& .app-bar-title']: {
        fontSize: '1.125em',
        letterSpacing: '0.75px',
      },
    },
  }),
);

export { Div };
