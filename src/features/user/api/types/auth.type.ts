import { IUser } from './common.type';

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

export interface IRequestRecoverData {
  email: string;
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
