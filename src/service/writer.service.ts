import WriterRepository from "../repository/writer.repository";

export default class WriterService {
  static async getWriter() {
    return await WriterRepository.getWriter();
  }
}
