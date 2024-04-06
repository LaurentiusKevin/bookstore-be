import { TokenUserParams } from "./auth.interface";
import { BookAttributes } from "./book.interface";

export interface UserPurchaseAttributes {
  id: number;
  user_id: number;
  book_id: number;
  point_used: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserPurchaseBookParams {
  user: TokenUserParams;
  book_id: number;
}

export interface UserPurchaseBookResponse {
  status: number;
  message: string;
  data?: BookAttributes;
}
