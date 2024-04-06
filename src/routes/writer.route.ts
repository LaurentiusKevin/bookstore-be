import { Request, Response, Router } from "express";
import TagController from "../controller/tag.controller";
import WriterController from "../controller/writer.controller";

export const writerRoute = Router();

writerRoute.get("/", async (req: Request, res: Response) => {
  try {
    const data = await WriterController.getWriter();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});
