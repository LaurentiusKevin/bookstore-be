import { col, fn } from "sequelize";
import UserPointsEntity from "../entity/user_point.entity";
import WriterEntity from "../entity/writer.entity";
import { WriterParams } from "../interface/writer.interface";
import { AddPointParams } from "../interface/user_point.interface";

export default class UserPointRepository {
  static async getUserPoint(user_id: number) {
    return await UserPointsEntity.findAll({
      where: {
        user_id: user_id,
      },
      order: [["createdAt", "asc"]],
    });
  }

  static async getLatestPoint(user_id: number) {
    const point = await UserPointsEntity.findOne({
      attributes: [[fn("SUM", col("point")), "point"]],
      where: {
        user_id: user_id,
      },
    });

    return point?.dataValues.point ?? 0;
  }

  static async addPoint({ user_id, point, notes }: AddPointParams) {
    const userPoint = await UserPointsEntity.create({
      user_id: user_id,
      point: point,
      notes: notes ?? "",
    });

    return userPoint.dataValues;
  }
}
