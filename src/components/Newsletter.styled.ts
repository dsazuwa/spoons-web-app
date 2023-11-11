import { styled } from '@mui/material';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  backgroundColor: palette.primary[800],
  padding: '64px 32px',

  '& .newsletter-container': {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .newsletter-header': {
    width: '100%',
    fontSize: '28px',
    fontWeight: 700,
    marginBottom: '16px',
    color: palette.base.white,
  },

  '& .newsletter-subheader': {
    width: '100%',
    fontSize: '14px',
    marginBottom: '16px',
    textAlign: 'start',
    color: palette.base.white,
  },

  '& .newsletter-form': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  '& .email-textfield-container': {
    width: '100%',
    marginBottom: '16px',
  },

  '& .email-textfield': {
    width: '100%',
    marginBottom: '8px',
    borderRadius: '8px',
    backgroundColor: palette.base.white,
  },

  '& .email-textfield-helper': {
    color: palette.base.white,
    fontSize: '12px',
  },

  '& .subscribe-button': {
    height: '44px',
    width: '100%',
    borderRadius: '8px',
    textTransform: 'capitalize',
    color: palette.base.white,
    backgroundColor: palette.primary[500],
  },

  [theme.breakpoints.up('sm')]: {
    padding: '64px',

    '& .newsletter-form': {
      flexDirection: 'row',
      alignItems: 'start',
    },

    '& .email-textfield-container': {
      width: 'auto',
      marginRight: '16px',
    },

    '& .email-textfield': {
      minWidth: '360px',
    },

    '& .subscribe-button': {
      width: 'auto',
      marginTop: '6px',
      marginRight: '16px',
    },
  },

  [theme.breakpoints.up('md')]: {
    '& .newsletter-header': {
      fontSize: '36px',
      textAlign: 'center',
    },

    '& .newsletter-subheader': {
      fontSize: '16px',
      textAlign: 'center',
    },

    '& .newsletter-form': {
      justifyContent: 'center',
    },

    '& .email-textfield': {
      minWidth: '400px',
    },

    '& .email-textfield-helper': {
      fontSize: '12px',
    },
  },
}));

export { Div };
