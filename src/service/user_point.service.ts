import { AddPointParams } from "../interface/user_point.interface";
import TagRepository from "../repository/tag.repository";
import UserPointRepository from "../repository/user_point.repository";

export default class UserPointService {
  static async getPoints(user_id: number) {
    return {
      message: "success",
      data: await UserPointRepository.getUserPoint(user_id),
    };
  }

  static async getLatestPoint(user_id: number) {
    const point = await UserPointRepository.getLatestPoint(user_id);

    return {
      message: "success",
      data: point,
    };
  }

  static async addPoints(params: AddPointParams) {
    const userPoints = await UserPointRepository.addPoint(params);

    return {
      message: "success",
      data: userPoints,
    };
  }
}
