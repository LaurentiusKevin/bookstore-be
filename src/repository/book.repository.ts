import { Op } from "sequelize";
import BookEntity from "../entity/book.entity";
import TagEntity from "../entity/tag.entity";
import WriterEntity from "../entity/writer.entity";
import { BookRepoParams } from "../interface/book.interface";

export default class BookRepository {
  static async getBook(
    page: number = 1,
    pageSize: number = 10,
    tags?: string[],
    writers?: string[]
  ) {
    const { count, rows } = await BookEntity.findAndCountAll({
      order: [["createdAt", "desc"]],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      include: [
        {
          model: TagEntity,
          // required: true,
          where:
            tags !== undefined
              ? {
                  title: { [Op.in]: tags },
                }
              : {},
        },
        {
          model: WriterEntity,
          // required: true,
          where:
            writers !== undefined
              ? {
                  name: { [Op.in]: writers },
                }
              : {},
        },
      ],
      distinct: true,
    });

    const totalPage = Math.ceil(count / pageSize);

    return {
      totalPage,
      currentPage: page,
      pageSize: pageSize,
      totalRecord: count,
      books: rows,
    };
  }

  static async createBook(params: BookRepoParams) {
    const newBook = await BookEntity.create({
      title: params.title,
      writer_id: params.writer_id,
      cover_image: params.cover_image,
      point: params.point,
      createdBy: 1,
    });

    return newBook.dataValues;
  }

  static async findById(id: number) {
    const book = await BookEntity.findOne({
      where: {
        id: id,
      },
      include: TagEntity,
    });

    return book?.dataValues;
  }
}
