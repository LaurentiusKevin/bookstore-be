import { Request, Response, Router } from "express";
import TagController from "../controller/tag.controller";
import UserPurchaseController from "../controller/user_purchase.controller";
import { verifyToken } from "../middleware";

export const userPurchaseRouter = Router();

userPurchaseRouter.post(
  "/",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const data = await UserPurchaseController.purchaseBook(req.body);

      res.status(data.status).json(data);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);
