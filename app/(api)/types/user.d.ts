export interface IUserRequest {
  user: IUser;
  client?: IClient;
}

export interface IUser {
  email: string;
  password: string;
  clientId?: number;
}

export interface IClient {
  name: string;
  lastName: string;
  phone: string;
  birthday: Date;
  address: string;
  image: string;
}
