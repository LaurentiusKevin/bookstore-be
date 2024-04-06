import { Request, Response, Router } from "express";
import AuthController from "../controller/auth.controller";
import { sign } from "jsonwebtoken";
import { AUTH } from "../constants/auth.constant";

export const authRouter = Router();

authRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await AuthController.register(body);

    res.status(200).json({ message: "success", data: data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

authRouter.post("/login", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await AuthController.login(body);

    if (data.error || data.user === undefined) {
      res.status(406).json({
        message: data.error,
      });
    }

    const token = sign(
      {
        id: data.user?.id,
        username: data.user?.username,
        name: data.user?.name,
      },
      AUTH.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const refreshToken = sign(
      {
        id: data.user?.id,
        username: data.user?.username,
        name: data.user?.name,
      },
      AUTH.JWT_SECRET,
      { expiresIn: "5d" }
    );

    res.status(200).json({
      message: "success",
      data: data.user,
      token: token,
      refreshToken: refreshToken,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});
