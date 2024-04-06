export interface RegisterParams {
  username: string;
  password: string;
  name: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface TokenUserParams {
  id: number;
  username: string;
  name: string;
  iat: Date;
  exp: Date;
}
