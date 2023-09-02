export interface IMenu {
  itemId: number;
  name: string;
  description: string;
  category: string;
  tags: string[] | null;
  prices: { size: string; price: string }[];
  status: string;
  photoUrl: string;
}
