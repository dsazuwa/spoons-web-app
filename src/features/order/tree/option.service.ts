import { modifierService } from './modifier.service';

export const optionService = {
  addChild: (option: OptionNode, modifier: ModifierNode) => {
    option.children.push(modifier);
    optionService.validate(option);
  },

  select: (option: OptionNode) => {
    const parent = option.parent;

    if (parent && parent.maxSelection === 1)
      parent.children.forEach((option: OptionNode) => {
        optionService.unselect(option);
      });

    option.isSelected = true;
    optionService.validate(option);
  },

  unselect: (option: OptionNode) => {
    option.isSelected = false;
    optionService.validate(option);
  },

  validate: (option: OptionNode) => {
    option.isValid = option.children.every((modifier) => modifier.isValid);

    if (option.parent) modifierService.validate(option.parent);
  },
};
