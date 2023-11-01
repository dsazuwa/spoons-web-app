/* eslint-disable @typescript-eslint/no-unused-vars */

type MenuItemType = {
  itemId: number;
  name: string;
  description: string | undefined;
  subCategory: string;
  tags: string[];
  price?: string;
  photoUrl: string;
  notes: string | undefined;
};

type CategoryItemType = {
  category: string;
  notes: string[] | undefined;
  items: MenuItemType[];
};

type GroupedMenuResponseType = {
  menu: CategoryItemType[];
  categories: string[];
};

interface ModifierOption {
  optionId: number;
  name: string;
  price?: number;
}

interface NestedOption {
  groupId: number;
  name: string;
  price?: number;
}

interface Modifier {
  groupId: number;
  isRequired: boolean;
  minSelection: number;
  maxSelection: number;
  maxFree: number;
  name: string;
  options: (ModifierOption | NestedOption)[];
}

interface ChildModifier {
  name: string;
  modifiers: Modifier[];
}
