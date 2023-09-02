import { IUser } from './common.type';

export interface IVerifyResponse {
  user: IUser;
  message: string;
}

export interface IVerifyData {
  code: string;
}
