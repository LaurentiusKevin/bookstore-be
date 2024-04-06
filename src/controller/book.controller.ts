import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Security,
  Tags,
} from "tsoa";
import {
  BookAttributes,
  CreateBookParams,
  GetBookResponse,
} from "../interface/book.interface";
import BookService from "../service/book.service";

@Tags("Book")
@Route("/book")
export default class BookController extends Controller {
  @Get("/")
  static async getBook(
    @Query("page") page?: string,
    @Query("pageSize") pageSize?: string,
    @Query("tags") tags?: string[],
    @Query("writers") writers?: string[]
  ): Promise<GetBookResponse> {
    const book = await BookService.getBook(
      parseInt(page ?? "1"),
      parseInt(pageSize ?? "10"),
      tags,
      writers
    );

    return book;
  }

  @Get("/{id}")
  static async getById(@Path() id: number) {
    const book = await BookService.getBookById(id);

    return book;
  }

  @Security("token")
  @Post("/")
  static async create(@Body() requestBody: CreateBookParams) {
    const book = await BookService.createBook(requestBody);

    return book;
  }
}
