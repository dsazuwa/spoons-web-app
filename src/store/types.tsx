export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  roles: string[];
}

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

export interface IGenericResponse {
  message: string;
}

/** *************** AUTH.API TYPES **************** */
export interface IRegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  user: IUser;
  message: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  message: string;
  accessToken: string | null;
}

export interface IVerifyRecoverData {
  email: string;
  code: string;
}

export interface IRecoverData {
  code: string;
  email: string;
  password: string;
}

export interface IRecoverResponse {
  user: IUser;
  message: string;
}

/** *************** MENU.API TYPES **************** */
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

/** *************** CUSTOMER.API TYPES **************** */
export interface IVerifyResponse {
  user: IUser;
  message: string;
}

export interface IVerifyData {
  code: string;
}
