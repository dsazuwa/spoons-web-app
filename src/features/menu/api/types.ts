/* eslint-disable @typescript-eslint/no-unused-vars */

type MenuItemType = {
  itemId: number;
  name: string;
  description: string;
  category: string;
  tags: string[] | null;
  prices: { size: string; price: string }[];
  status: string;
  photoUrl: string;
  notes: string | undefined;
};

type PublicMenuItemType = {
  name: string;
  description: string;
  tags: string[];
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
  menu: MenuType<PublicCategoryItemType>;
};
