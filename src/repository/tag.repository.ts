import BookTagEntity from "../entity/book_tag.entity";
import TagEntity from "../entity/tag.entity";

export default class TagRepository {
  static async getTag() {
    return await TagEntity.findAll({
      order: [["title", "asc"]],
    });
  }

  static async createOrFind(params: string[], book_id: number) {
    params.forEach(async (item) => {
      const [tags, created] = await TagEntity.findOrCreate({
        where: {
          title: item,
        },
      });

      await BookTagEntity.create({
        book_id: book_id,
        tag_id: tags.dataValues.id,
      });
    });

    return true;
  }
}
