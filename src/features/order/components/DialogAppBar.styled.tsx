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
      fontSize: '.85rem',
    },

    ['& .action-button']: {
      padding: '8px 0',
      marginRight: '16px',
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
      fontSize: '.6875em',
    },

    ['& .option-name']: {
      color: palette.base.black,
      fontWeight: 600,
      fontSize: '.8125em',
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
        fontSize: '1.25rem',
      },

      ['& .item-name']: {
        fontSize: '.875em',
      },

      ['& .option-name']: {
        fontSize: '1em',
      },
    },
  }),
);

export { Div };
