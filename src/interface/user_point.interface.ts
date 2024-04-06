import { TokenUserParams } from "./auth.interface";

export interface UserPointAttributes {
  id: number;
  user_id: number;
  point: number;
  notes: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GetPointParams {
  user: TokenUserParams;
}

export interface GetUserPointsResponse {
  message: string;
  data: UserPointAttributes[];
}

export interface GetLatestPointResponse {
  message: string;
  data: number;
}

export interface AddPointParams {
  user_id: number;
  point: number;
  notes?: string;
}
