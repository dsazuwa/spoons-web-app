export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  roles: string[];
}

export interface IGenericResponse {
  message: string;
}
