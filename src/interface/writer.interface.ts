export interface WriterParams {
  id?: number;
  name?: string;
}

export interface WriterAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GetWriterResponse {
  message: string;
  data: WriterAttributes[];
}
