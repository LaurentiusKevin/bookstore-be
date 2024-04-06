import TagRepository from "../repository/tag.repository";

export default class TagService {
  static async getTag() {
    return await TagRepository.getTag();
  }
}
