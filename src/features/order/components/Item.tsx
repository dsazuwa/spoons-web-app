import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useReducer } from 'react';

import { DialogContext, DialogType } from '../contexts/DialogContext';
import useGetModifiers from '../hooks/useGetModifiers';
import BackdropLoader from './BackdropLoader';
import Dialog from './Dialog';
import ItemCard from './ItemCard';

type NavigationState = {
  type: DialogType;
  optionIdStack: number[];
};

enum NavigationActions {
  OPEN_ITEM = 'OPEN_ITEM',
  OPEN_OPTION = 'OPEN_OPTION',
  OPEN_PREFERENCES = 'OPEN_PREFERENCES',
  BACK = 'BACK',
  CLOSE = 'CLOSE',
}

type NavigationAction = {
  type: NavigationActions;
  payload?: number;
};

function navigationReducer(
  state: NavigationState,
  action: NavigationAction,
): NavigationState {
  const { type, payload } = action;

  switch (type) {
    case NavigationActions.OPEN_ITEM:
      return {
        type: 'item',
        optionIdStack: [],
      };

    case NavigationActions.OPEN_OPTION: {
      if (!payload) throw Error('Payload is missing for OPEN_OPTION action.');

      return {
        type: 'option',
        optionIdStack: [...state.optionIdStack, payload],
      };
    }

    case NavigationActions.OPEN_PREFERENCES:
      return {
        type: 'preferences',
        optionIdStack: [],
      };

    case NavigationActions.BACK: {
      const updatedStack = [...state.optionIdStack];
      updatedStack.pop();

      return {
        type: updatedStack.length === 0 ? 'item' : 'option',
        optionIdStack: updatedStack,
      };
    }

    case NavigationActions.CLOSE:
      return {
        type: null,
        optionIdStack: [],
      };

    default:
      throw Error(`Unhandled action type: ${type}`);
  }
}

function Item({ item }: { item: MenuItemType }) {
  const { trigger, isLoading, isFetching, data } = useGetModifiers();

  const [state, dispatch] = useReducer(navigationReducer, {
    type: null,
    optionIdStack: [],
  });

  const handleClickOpen = () => {
    trigger(item.itemId, true);
    dispatch({ type: NavigationActions.OPEN_ITEM });
  };

  const handleClose = () => {
    dispatch({ type: NavigationActions.CLOSE });
  };

  const getCurrentOption = () =>
    state.optionIdStack[state.optionIdStack.length - 1];

  const openOption = (id: number) => {
    dispatch({ type: NavigationActions.OPEN_OPTION, payload: id });
  };

  const openPreferences = () => {
    dispatch({ type: NavigationActions.OPEN_PREFERENCES });
  };

  const handleBack = () => {
    dispatch({ type: NavigationActions.BACK });
  };

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleClickOpen} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      <DialogContext.Provider
        value={{
          itemName: item.name,
          type: state.type,
          getCurrentOption,
          openOption,
          openPreferences,
          handleBack,
          handleClose,
        }}
      >
        {isLoading || isFetching || data?.modifiers === undefined ? (
          <BackdropLoader
            open={state.type !== null}
            handleClose={handleClose}
          />
        ) : (
          <Dialog item={item} modifiers={data.modifiers} />
        )}
      </DialogContext.Provider>
    </Box>
  );
}

export default Item;
