import { Controller, Get, Route, Tags } from "tsoa";
import { GetWriterResponse } from "../interface/writer.interface";
import WriterService from "../service/writer.service";

@Tags("Writer")
@Route("/writers")
export default class WriterController extends Controller {
  @Get("/")
  static async getWriter(): Promise<GetWriterResponse> {
    return {
      message: "success",
      data: await WriterService.getWriter(),
    };
  }
}
