import { Request, Response, Router } from "express";
import BookController from "../controller/book.controller";
import { verifyToken } from "../middleware";

export const bookRouter = Router();

bookRouter.get("/", async (req: Request, res: Response) => {
  try {
    const queryParams: { page?: string; pageSize?: string } = req.query;

    const data = await BookController.getBook(
      queryParams.page,
      queryParams.pageSize
    );

    res.status(200).json({ message: "success", data: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

bookRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const data = await BookController.getById(parseInt(req.params.id));

    res.status(200).json({ message: "success", data: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

bookRouter.post("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await BookController.create(body);

    res.status(200).json({ message: "success", data: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});
