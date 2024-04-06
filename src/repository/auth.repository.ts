import UserEntity from "../entity/user.entity";
import { RegisterParams } from "../interface/auth.interface";

export default class AuthRepository {
  static async register(params: RegisterParams) {
    const newUser = await UserEntity.create({
      username: params.username,
      password: params.password,
      name: params.name,
    });

    return newUser.dataValues;
  }

  static async getUserByUsername(username: string) {
    const user = await UserEntity.findOne({
      where: {
        username: username,
      },
    });

    return user;
  }
}
