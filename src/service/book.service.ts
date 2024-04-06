import { CreateBookParams } from "../interface/book.interface";
import BookRepository from "../repository/book.repository";
import TagRepository from "../repository/tag.repository";
import WriterRepository from "../repository/writer.repository";

export default class BookService {
  static async getBook(
    page: number = 1,
    pageSize: number = 10,
    tags?: string[],
    writers?: string[]
  ) {
    if (tags && typeof tags === "string") {
      tags = [tags];
    }

    if (writers && typeof writers === "string") {
      writers = [writers];
    }
    const book = await BookRepository.getBook(page, pageSize, tags, writers);

    return book;
  }

  static async createBook(params: CreateBookParams) {
    const writer = await WriterRepository.createOrFind(params.writer);

    const book = await BookRepository.createBook({
      title: params.book.title,
      writer_id: writer.id,
      cover_image: params.book.cover_image,
      point: params.book.point,
    });

    await TagRepository.createOrFind(params.tags, book.id);

    return await BookRepository.findById(book.id);
  }

  static async getBookById(id: number) {
    const book = await BookRepository.findById(id);

    return book;
  }
}
