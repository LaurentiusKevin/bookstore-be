import { Body, Controller, Post, Route, Security, Tags } from "tsoa";
import {
  UserPurchaseBookParams,
  UserPurchaseBookResponse,
} from "../interface/user_purchase.interface";
import UserPurchaseService from "../service/user_purchase.service";
import { Error } from "../constants/error.constant";

@Tags("User Purchase")
@Route("/user-purchase")
export default class UserPurchaseController extends Controller {
  @Security("token")
  @Post("/")
  static async purchaseBook(
    @Body() requestBody: UserPurchaseBookParams
  ): Promise<UserPurchaseBookResponse> {
    const purchase = await UserPurchaseService.purchaseBook(
      requestBody.user.id,
      requestBody.book_id
    );

    if (purchase === Error.NOT_FOUND || purchase === Error.NOT_ENOUGH_POINT) {
      return {
        status: 406,
        message: purchase,
      };
    }

    return purchase;
  }
}
