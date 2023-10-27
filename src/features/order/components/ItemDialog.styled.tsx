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
    fontSize: '1.25em',
  },

  ['& .dialog-description']: {
    color: palette.grey[600],
    marginTop: '10px',
    fontWeight: 600,
    fontSize: '.75em',
  },

  [theme.breakpoints.up('sm')]: {
    ['& .MuiDialog-paperScrollPaper']: {
      borderRadius: '2%',
    },

    ['& .dialog-name']: {
      fontSize: '1.75em',
    },

    ['& .dialog-description']: {
      fontSize: '.875em',
    },
  },
}));

export { Dialog };
