export const itemService = {
  addChild: (node: ItemNode, modifier: ModifierNode) => {
    node.modifiers.push(modifier);
    itemService.validate(node);
  },

  validate: (node: ItemNode) => {
    node.isValid = node.modifiers.every((modifier) => modifier.isValid);
  },
};
