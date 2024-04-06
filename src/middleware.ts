import { NextFunction, Request, Response } from "express";
import { AUTH } from "./constants/auth.constant";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "No token provided." });
  }

  verify(authorization, AUTH.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token." });
    }

    req.body.user = decoded;
    next();
  });
};
