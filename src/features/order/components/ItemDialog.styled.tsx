import { styled } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';

import palette from '@utils/palette';

const Dialog = styled(MuiDialog)(({ theme }) => ({
  ['& .MuiDialog-paperScrollPaper']: {
    borderRadius: '0',
  },

  ['& .dialog-stack']: {
    overflowY: 'auto',
    padding: '0 16px 16px 16px',
  },

  ['& .dialog-name']: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: '1.25rem',
  },

  ['& .dialog-description']: {
    color: palette.grey[500],
    marginTop: '10px',
    fontWeight: 600,
    fontSize: '.75rem',
  },

  [theme.breakpoints.up('sm')]: {
    ['& .MuiDialog-paperScrollPaper']: {
      borderRadius: '2%',
    },

    ['& .dialog-name']: {
      fontSize: '2.25rem',
    },

    ['& .dialog-description']: {
      fontSize: '1rem',
    },
  },
}));

export { Dialog };
