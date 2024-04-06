import { Error } from "../constants/error.constant";
import BookRepository from "../repository/book.repository";
import UserPointRepository from "../repository/user_point.repository";
import UserPurchaseRepository from "../repository/user_purchase.repository";

export default class UserPurchaseService {
  static async purchaseBook(user_id: number, book_id: number) {
    const book = await BookRepository.findById(book_id);
    const userPoint = await UserPointRepository.getLatestPoint(user_id);

    if (book === undefined) return Error.NOT_FOUND;

    if (userPoint < book.point) return Error.NOT_ENOUGH_POINT;

    await UserPurchaseRepository.purchaseBook(user_id, book);

    await UserPointRepository.addPoint({
      user_id: user_id,
      point: book.point * -1,
      notes: `Used to buy ${book.title} books!`,
    });

    return {
      status: 200,
      message: "success",
      data: book,
    };
  }
}
