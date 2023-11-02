import { useEffect, useState } from 'react';

import { DialogType } from '../components/Dialog';
import useGetChildModifiers from '../hooks/useGetChildModifiers';
import useGetModifiers from '../hooks/useGetModifiers';
import { isOptionNode, useTree } from '../treeState';

const useDialog = (item: MenuItemType) => {
  const {
    trigger: getModifiers,
    isLoading: isModifierLoading,
    isFetching: isModifierFetching,
    data: modifierData,
  } = useGetModifiers();

  const {
    trigger: getChildModifiers,
    isLoading: isChildLoading,
    isFetching: isChildFetching,
    data: childData,
  } = useGetChildModifiers();

  const {
    current,
    addTreeNodes,
    buildTree,
    dropTree,
    selectOption,
    setCurrentNode,
    unselectOption,
  } = useTree();

  const [type, setType] = useState<DialogType>(null);

  const handleOpen = () => {
    getModifiers(item.itemId, true);
    setType('item');
  };

  const handleOpenPreferences = () => {
    setType('preferences');
  };

  const handleClosePreferences = () => {
    setType('item');
  };

  const handleClose = () => {
    dropTree();
    setType(null);
  };

  useEffect(() => {
    if (!current && modifierData)
      buildTree(item, modifierData?.modifiers);
  }, [item, current, modifierData, buildTree]);

  useEffect(() => {
    if (isOptionNode(current) && !current.getIsFulfilled()) {
      if (!current.getIsNested()) return;

      getChildModifiers(current.getId());
    }
  }, [current, getChildModifiers]);

  useEffect(() => {
    if (isOptionNode(current) && !current.getIsFulfilled()) {
      if (!current.getIsNested()) return;

      if (childData !== undefined)
        addTreeNodes(childData.modifiers, current.getKey());
    }
  }, [childData]);

  return {
    type,
    current,
    isModifierLoading,
    isChildLoading,
    isModifierFetching,
    isChildFetching,
    handleOpen,
    handleOpenPreferences,
    handleClosePreferences,
    handleClose,
    selectOption,
    setCurrentNode,
    unselectOption,
  };
};

export default useDialog;
