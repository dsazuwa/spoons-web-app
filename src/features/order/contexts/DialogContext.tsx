import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type DialogType = 'item' | 'option' | 'preferences' | null;

export type DialogContextType = {
  itemName: string;
  type: DialogType;
  setType: Dispatch<SetStateAction<DialogType>>;
  getCurrentOption: () => number;
  openOption: (id: number) => void;
  handleBack: () => void;
  handleClose: () => void;
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
