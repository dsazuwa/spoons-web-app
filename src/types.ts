import { AlertColor } from '@mui/material';

export type PageAcceessType = 'public' | 'private' | 'unauthenticated';

export type SnackbarType = {
  open: boolean;
  message: string;
  severity: AlertColor;
};

export type SnackbarHandleCloseType = (
  event?: Event | React.SyntheticEvent<Element, Event> | undefined,
  reason?: string | undefined,
) => void;
