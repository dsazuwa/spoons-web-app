import { styled } from '@mui/material';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: 'auto',
  borderTop: `1px solid ${palette.grey[100]}`,

  '& .row': { display: 'flex', flexDirection: 'row' },
  '& .col': { display: 'flex', flexDirection: 'column' },
  '& .mb': { marginBottom: '8px' },
  '& .pr': { paddingRight: '32px' },

  '& .footer-main-box': {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .footer-main': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '32px',
  },

  '& .footer-logo-box': {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
  },

  '& .footer-logo': {
    color: palette.primary[700],
  },

  '& .footer-slogan': {
    width: '100%',
    fontSize: '12px',
    color: palette.grey[400],
    margin: '8px 0px 16px 0px',
  },

  '& .footer-button': {
    alignItems: 'center',
    justifyContent: 'start',
    padding: '4px 0px',
    color: palette.grey[950],
    fontSize: '12px',
    textTransform: 'capitalize',
  },

  '& .footer-footer-box': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: palette.grey[100],
  },

  '& .footer-footer': {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'start',
    justifyContent: 'reverse',
    padding: '16px 32px',
  },

  '& .footer-copyright': {
    fontSize: '10px',
    color: palette.grey[400],
  },

  '& .footer-socials': {
    marginLeft: '-8px',

    svg: { fontSize: '15px' },
    '& .MuiButtonBase-root': { padding: '8px' },
  },

  [theme.breakpoints.up('sm')]: {
    '& .pr': { paddingRight: '32px' },

    '& .footer-main': {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },

    '& .footer-slogan': {
      width: '300px',
      fontSize: '12px',
      color: palette.grey[400],
      marginTop: '8px 0px 0px 0px',
    },

    '& .footer-button': {
      justifyContent: 'end',
    },

    '& .footer-footer': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    '& .footer-socials': {
      marginLeft: 0,
    },
  },
}));

export { Div };
