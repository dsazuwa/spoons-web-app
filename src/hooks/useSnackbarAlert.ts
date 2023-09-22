import { AlertColor } from '@mui/material/Alert';
import React, { useState } from 'react';

const useSnackbarAlert = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'error' as AlertColor,
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  return { snackbar, setSnackbar, handleClose };
};

export default useSnackbarAlert;
