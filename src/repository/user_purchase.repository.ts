import UserPurchaseEntity from "../entity/user_purchase.entity";
import { BookAttributes } from "../interface/book.interface";

export default class UserPurchaseRepository {
  static async purchaseBook(user_id: number, book: BookAttributes) {
    return await UserPurchaseEntity.create({
      user_id: user_id,
      book_id: book.id,
      point_used: book.point,
    });
  }
}
