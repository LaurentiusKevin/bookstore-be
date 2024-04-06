import { Body, Controller, Example, Get, Post, Route, Tags } from "tsoa";
import { LoginParams, RegisterParams } from "../interface/auth.interface";
import AuthService from "../service/auth.service";

@Tags("Auth")
@Route("/auth")
export default class AuthController extends Controller {
  @Post("/register")
  static async register(@Body() requestBody: RegisterParams) {
    const user = await AuthService.register(requestBody);

    return {
      id: user.id,
      name: user.name,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  @Post("/login")
  static async login(@Body() requestBody: LoginParams) {
    const validate = await AuthService.login(requestBody);

    return validate;
  }
}
