import { getModifier, getOption } from './nodeSelectors';

export const getItemSelectionPrice = (map: TreeMap, item: ItemNode) =>
  item.children.reduce((price, child) => {
    const modifier = getModifier(map, child);

    return price + getModfierSelectionPrice(map, modifier);
  }, item.price);

export const getModfierSelectionPrice = (
  map: TreeMap,
  modifier: ModifierNode,
) =>
  modifier.children.reduce((price, child) => {
    const option = getOption(map, child);

    return (
      price + (option.isSelected ? getOptionSelectionPrice(map, option) : 0)
    );
  }, 0);

export const getOptionSelectionPrice = (map: TreeMap, option: OptionNode) =>
  option.children.reduce((price, child) => {
    const modifier = getModifier(map, child);

    return price + getModfierSelectionPrice(map, modifier);
  }, option.price);
