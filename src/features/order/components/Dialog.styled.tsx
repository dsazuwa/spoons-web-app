import { styled } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';

import palette from '@utils/palette';

const Dialog = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paperScrollPaper': {
    borderRadius: '0',
    maxWidth: '560px',
  },

  '& .dialog-content': {
    overflowY: 'auto',
    padding: '0 16px 16px 16px',
  },

  '& .dialog-footer': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    marginTop: 'auto',
    padding: '16px',
    backgroundColor: palette.base.white,
    borderTop: `1px solid ${palette.grey[200]}`,
  },

  '& .item-dialog-footer': {
    justifyContent: 'center',
  },

  '& .preferences-dialog-footer': {
    justifyContent: 'end',
  },

  '& .dialog-footer-button': {
    borderRadius: '24px',
    textAlign: 'center',
    fontSize: '12px',
  },

  '& .add-to-cart': {
    minWidth: '192px',
  },

  '& .dialog-name': {
    fontWeight: 700,
    fontSize: '1.25em',
  },

  '& .dialog-description': {
    color: palette.grey[600],
    marginTop: '10px',
    fontWeight: 600,
    fontSize: '.75em',
  },

  '& .stack-item': {
    marginBottom: '16px',
  },

  '& .options-dialog-button': {
    width: '100%',
  },

  '& .save-options-button': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  [theme.breakpoints.up('sm')]: {
    '& .MuiDialog-paperScrollPaper': {
      borderRadius: '2%',
    },

    '& .dialog-footer-button': {
      fontSize: '14px',
    },

    '& .add-to-cart': {
      minWidth: '220px',
    },

    '& .dialog-name': {
      fontSize: '1.75em',
    },

    '& .dialog-description': {
      fontSize: '.875em',
    },

    '& .stack-item': {
      marginBottom: '24px',
    },
  },
}));

export { Dialog };
