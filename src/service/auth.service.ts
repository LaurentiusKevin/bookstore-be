import { promisify } from "util";
import { LoginParams, RegisterParams } from "../interface/auth.interface";
import AuthRepository from "../repository/auth.repository";
import * as crypto from "crypto";
import { Error } from "../constants/error.constant";

export default class AuthService {
  static scryptAsync = promisify(crypto.scrypt);

  static async hashPassword(password: string) {
    const salt = crypto.randomBytes(16).toString("hex");
    const buf = (await this.scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  }

  static async validatePassword(
    storedPassword: string,
    suppliedPassword: string
  ) {
    const [hashedPassword, salt] = storedPassword.split(".");

    const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");

    const suppliedPasswordBuf = (await this.scryptAsync(
      suppliedPassword,
      salt,
      64
    )) as Buffer;

    return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
  }

  static async register(params: RegisterParams) {
    return await AuthRepository.register({
      username: params.username,
      password: await this.hashPassword(params.password),
      name: params.name,
    });
  }

  static async login(params: LoginParams) {
    const user = await AuthRepository.getUserByUsername(params.username);

    if (user === null) {
      return {
        error: Error.USER_NOT_FOUND,
      };
    }

    const isPasswordValid = await this.validatePassword(
      user.password,
      params.password
    );
    if (!isPasswordValid) {
      return {
        error: Error.AUTH_WRONG_PASSWORD,
      };
    }

    return {
      error: undefined,
      user: {
        username: user.username,
        name: user.name,
      },
    };
  }
}
