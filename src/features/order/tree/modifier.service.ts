import { itemService } from './item.service';
import { optionService } from './option.service';
import { isItemNode, isOptionNode } from './typeguard';

export const modifierService = {
  addChild: (modifier: ModifierNode, option: OptionNode) => {
    modifier.children.push(option);
    modifierService.validate(modifier);
  },

  satisfiesMin: (modifier: ModifierNode, numSelected: number) =>
    numSelected >= modifier.minSelection,

  satisfiesMax: (modifier: ModifierNode, numSelected: number) =>
    numSelected <= modifier.maxSelection,

  validate: (modifier: ModifierNode) => {
    const numValid = modifier.children.filter(
      (option) => option.isSelected && option.isValid,
    ).length;

    modifier.isValid =
      modifierService.satisfiesMin(modifier, numValid) &&
      modifierService.satisfiesMax(modifier, numValid);

    const parent = modifier.parent;
    if (parent) {
      if (isItemNode(parent)) itemService.validate(parent);
      else if (isOptionNode(parent)) optionService.validate(parent);
    }
  },
};
