import { IMenu } from './common.type';

export interface IMenuResponse {
  menu: IMenu[];
  message: string;
}

export interface IGroupedMenuResponse {
  menu: {
    category: string;
    items: IMenu[];
  };
  message: string;
}
