import { Request, Response, Router } from "express";
import { authRouter } from "./auth.route";
import { bookRouter } from "./book.route";
import { tagRouter } from "./tag.route";
import { writerRoute } from "./writer.route";

export const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Welcome aboard!");
});

routes.use("/api/v1/auth", authRouter);
routes.use("/api/v1/book", bookRouter);
routes.use("/api/v1/tags", tagRouter);
routes.use("/api/v1/writers", writerRoute);
