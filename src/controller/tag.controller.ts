import { Controller, Get, Route, Tags } from "tsoa";
import TagService from "../service/tag.service";
import { GetTagResponse, TagAttributes } from "../interface/tag.interface";

@Tags("Tags")
@Route("/tags")
export default class TagController extends Controller {
  @Get("/")
  static async getTag(): Promise<GetTagResponse> {
    return {
      message: "success",
      data: await TagService.getTag(),
    };
  }
}
