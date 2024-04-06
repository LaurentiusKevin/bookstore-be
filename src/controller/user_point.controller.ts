import {
  Body,
  Controller,
  Get,
  Path,
  Request,
  Route,
  Security,
  Tags,
} from "tsoa";
import {
  GetLatestPointResponse,
  GetPointParams,
  GetUserPointsResponse,
} from "../interface/user_point.interface";
import UserPointService from "../service/user_point.service";

@Tags("User Point")
@Route("/point")
export default class UserPointController extends Controller {
  @Security("token")
  @Get("/")
  static async getPoints(
    @Request() requestBody: GetPointParams
  ): Promise<GetUserPointsResponse> {
    return await UserPointService.getPoints(requestBody.user.id);
  }

  @Security("token")
  @Get("/latest")
  static async getLatestPoint(
    @Request() requestBody: GetPointParams
  ): Promise<GetLatestPointResponse> {
    return await UserPointService.getLatestPoint(requestBody.user.id);
  }
}
