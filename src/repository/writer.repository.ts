import WriterEntity from "../entity/writer.entity";
import { WriterParams } from "../interface/writer.interface";

export default class WriterRepository {
  static async getWriter() {
    return await WriterEntity.findAll({
      order: [["name", "asc"]],
    });
  }

  static async createOrFind(params: WriterParams) {
    if (!params.id && !params.name) {
      throw new Error("either id or name must be filled!");
    }

    let whereOptions = {};
    if (params.id) {
      whereOptions = {
        id: params.id,
      };
    } else {
      whereOptions = {
        name: params.name,
      };
    }

    const [writer, created] = await WriterEntity.findOrCreate({
      where: whereOptions,
    });

    return writer.dataValues;
  }
}
