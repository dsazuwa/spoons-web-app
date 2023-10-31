import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@store';
import {
  buildTree,
  selectOption,
  unselectOption,
  setCurrentNode,
  addTreeNodes,
} from '@store/slices';

export const useTree = () => {
  const dispatch = useDispatch();

  const treeState = useSelector((state: RootState) => state.treeState);

  const handleBuildTree = (item: MenuItemType, modifiers: Modifier[]) => {
    dispatch(buildTree({ item, modifiers }));
  };

  const handleSelectOption = (key: string) => {
    dispatch(selectOption(key));
  };

  const handleUnselectOption = (key: string) => {
    dispatch(unselectOption(key));
  };

  const handleSetCurrentNode = (key: string) => {
    dispatch(setCurrentNode(key));
  };

  const handleAddTreeNodes = (optionKey: string, modifiers: Modifier[]) => {
    dispatch(addTreeNodes({ optionKey, modifiers }));
  };

  return {
    treeState,
    handleBuildTree,
    handleSelectOption,
    handleUnselectOption,
    handleSetCurrentNode,
    handleAddTreeNodes,
  };
};
