import { TokenUserParams } from "./auth.interface";
import { WriterParams } from "./writer.interface";

export interface BookAttributes {
  id: number;
  title: string;
  writer_id: number;
  cover_image: string;
  point: number;
  createdBy: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BookParams {
  title: string;
  cover_image: string;
  point: number;
}

export interface BookRepoParams {
  title: string;
  cover_image: string;
  writer_id: number;
  point: number;
}

export interface CreateBookParams {
  user: TokenUserParams;
  book: BookParams;
  tags: string[];
  writer: WriterParams;
}

export interface GetBookParams {
  id: number;
}

export interface GetBookResponse {
  totalPage: number;
  currentPage: number;
  pageSize: number;
  totalRecord: number;
  books: BookAttributes[];
}
