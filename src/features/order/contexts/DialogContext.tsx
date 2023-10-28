import { Dispatch, SetStateAction, createContext } from 'react';

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

const DialogContext = createContext<DialogContextType | null>(null);

export default DialogContext;
