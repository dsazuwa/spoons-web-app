import { getModifier, getOption } from './nodeSelectors';

export const getItemSelectionPrice = (map: TreeMap, item: ItemNode) =>
  item.children.reduce((price, child) => {
    const modifier = getModifier(map, child);

    return price + getModfierSelectionPrice(map, modifier);
  }, item.price);

export const getModfierSelectionPrice = (
  map: TreeMap,
  modifier: ModifierNode,
): number =>
  modifier.children.reduce((price, child) => {
    const option = getOption(map, child);

    return (
      price + (option.isSelected ? getOptionSelectionPrice(map, option) : 0)
    );
  }, 0);

export const getOptionSelectionPrice = (
  map: TreeMap,
  option: OptionNode,
): number =>
  option.children.reduce((price, child) => {
    const modifier = getModifier(map, child);

    return price + getModfierSelectionPrice(map, modifier);
  }, option.price);

export const getSelections = (map: TreeMap, item: ItemNode) =>
  item.children.flatMap((mKey) =>
    getModfierSelection(map, getModifier(map, mKey)),
  );

export const getModfierSelection = (map: TreeMap, modifier: ModifierNode) =>
  modifier.children.flatMap((oKey) =>
    getOptionSelection(map, getOption(map, oKey)),
  );

export const getOptionSelection = (map: TreeMap, option: OptionNode) => {
  if (!option.isSelected) return [];

  const selection = [{ [option.key]: option.name }];

  if (option.isNested)
    selection.push(
      ...option.children.flatMap((key) =>
        getOptionSelection(map, getOption(map, key)),
      ),
    );

  return selection;
};
