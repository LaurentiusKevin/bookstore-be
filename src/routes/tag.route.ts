import { Request, Response, Router } from "express";
import TagController from "../controller/tag.controller";

export const tagRouter = Router();

tagRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data = await TagController.getTag();

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});
