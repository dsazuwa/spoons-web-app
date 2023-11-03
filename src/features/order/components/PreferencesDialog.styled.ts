import { styled } from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import MuiSelect from '@mui/material/Select';

import palette from '@utils/palette';

const PreferencesContent = styled('div')<{ acceptsRequests: boolean }>(
  ({ theme, acceptsRequests }) => ({
    '& .header': {
      marginBottom: '24px',
    },

    '& .section-header': {
      fontSize: '.825em',
      fontWeight: 600,
      marginBottom: '8px',
      color: palette.base.black,
    },

    '& .special-requests': {
      color: acceptsRequests ? palette.base.black : palette.grey[400],
    },

    [theme.breakpoints.up('sm')]: {
      '& .section-header': {
        fontSize: '.9em',
      },
    },
  }),
);

const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    background: palette.grey[100],
    borderRadius: '8px',
    padding: '16px 12px',
    fontSize: '.75rem',

    '& fieldset': {
      borderColor: palette.grey[100],
    },

    '&:hover fieldset': {
      borderColor: palette.grey[100],
    },

    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: palette.base.black,
    },

    '& .Mui-disabled': {
      WebkitTextFillColor: '#000000',
      border: 'none',
      fontSize: '.75rem',
      lineHeight: 1.5,
    },
  },

  [theme.breakpoints.up('sm')]: {
    '& .MuiInputBase-root': {
      padding: '20px 12px',
      fontSize: '.95rem',

      '& .Mui-disabled': {
        fontSize: '.95rem',
      },
    },
  },
}));

const Select = styled(MuiSelect)(({ theme }) => ({
  '& .MuiSelect-outlined': {
    background: palette.grey[100],
    borderRadius: '8px',
    padding: '16px 12px',
    fontSize: '.75rem',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  [theme.breakpoints.up('sm')]: {
    '& .MuiSelect-outlined': {
      padding: '20px 12px',
      fontSize: '.95rem',
    },
  },
}));

export { PreferencesContent, Select, TextField };
