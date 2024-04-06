export interface TagAttributes {
  id: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TagParams {
  title: string;
}

export interface GetTagResponse {
  message: string;
  data: TagAttributes[];
}
