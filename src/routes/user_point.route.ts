import { Request, Response, Router } from "express";
import UserPointController from "../controller/user_point.controller";
import { verifyToken } from "../middleware";

export const userPointRouter = Router();

userPointRouter.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const data = await UserPointController.getPoints(req.body);

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

userPointRouter.get(
  "/latest",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const data = await UserPointController.getLatestPoint(req.body);

      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);
