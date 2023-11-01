import { createContext, useContext } from 'react';

export type DialogType = 'item' | 'preferences' | null;

export type DialogContextType = {
  type: DialogType;
  handleOpen: () => void;
  handleClose: () => void;
  handleOpenPreferences: () => void;
  handleClosePreferences: () => void;
};

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined,
);

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === undefined)
    throw Error('useDialogContext must be used with a DialogContext');

  return context;
};
