/* eslint-disable @typescript-eslint/no-unused-vars */

type MenuItemType = {
  itemId: number;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  tags: string[] | null;
  prices: { size: string; price: string }[];
  status: string;
  photoUrl: string;
  notes: string | undefined;
};

type PublicMenuItemType = {
  itemId: number;
  name: string;
  description: string;
  subCategory: string;
  tags: string[];
  prices: { size: string; price: string }[];
  photoUrl: string;
  notes: string | undefined;
};

type CategoryItemType = {
  category: string;
  notes: string[] | undefined;
  items: MenuItemType[];
};

type PublicCategoryItemType = {
  category: string;
  notes: string[] | undefined;
  items: PublicMenuItemType[];
};

type CategoryType =
  | 'creations'
  | 'sandwiches'
  | 'bowls'
  | 'salads'
  | 'combos'
  | 'kids'
  | 'sides';

type MenuType<T> = {
  creations: T;
  foodie: T;
  classics: T;
  salads: T;
  bowls: T;
  combos: T;
  kids: T;
  sides: T;
};

type GroupedMenuResponseType = {
  menu: Record<string, PublicCategoryItemType>;
};
