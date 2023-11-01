import { useState } from 'react';

import { DialogType } from '../components/Item';

const useDialog = () => {
  const [type, setType] = useState<DialogType>(null);

  const handleOpen = () => {
    setType('item');
  };

  const handleOpenPreferences = () => {
    setType('preferences');
  };

  const handleClosePreferences = () => {
    setType('item');
  };

  const handleClose = () => {
    setType(null);
  };

  return {
    type,
    handleOpen,
    handleOpenPreferences,
    handleClosePreferences,
    handleClose,
  };
};

export default useDialog;
