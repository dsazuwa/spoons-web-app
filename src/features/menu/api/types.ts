/* eslint-disable @typescript-eslint/no-unused-vars */

type MenuItemType = {
  itemId: number;
  name: string;
  description: string | undefined;
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

type GroupedMenuResponseType = {
  menu: CategoryItemType[];
  categories: string[];
};
