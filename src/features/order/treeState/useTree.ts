import cloneDeep from 'lodash.clonedeep';
import { Reducer, useReducer } from 'react';

import { TreeAction, TreeActionType, TreeState } from './TreeState';

const TreeReducer: Reducer<TreeState, TreeAction> = (state, action) => {
  const newState = cloneDeep(state);
  newState.handleAction(action);

  return newState;
};

export const useTree = () => {
  const [state, dispatch] = useReducer(TreeReducer, new TreeState());

  const buildTree = (item: MenuItemType, modifiers: Modifier[]) => {
    dispatch({ type: TreeActionType.BUILD_TREE, item, modifiers });
  };

  const dropTree = () => {
    dispatch({ type: TreeActionType.DROP_TREE });
  };

  const selectOption = (key: string) => {
    dispatch({ type: TreeActionType.SELECT_OPTION, key });
  };

  const unselectOption = (key: string) => {
    dispatch({ type: TreeActionType.UNSELECT_OPTION, key });
  };

  const setCurrentNode = (key: string) => {
    dispatch({ type: TreeActionType.SET_CURRENT_NODE, key });
  };

  const addTreeNodes = (modifiers: Modifier[], optionKey: string) => {
    dispatch({ type: TreeActionType.ADD_TREE_NODES, modifiers, optionKey });
  };

  return {
    current: state.getCurrent(),
    buildTree,
    dropTree,
    selectOption,
    unselectOption,
    setCurrentNode,
    addTreeNodes,
  };
};
