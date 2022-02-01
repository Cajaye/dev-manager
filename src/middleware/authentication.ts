//verify jwt token
import jwt from "jsonwebtoken";
import type { UserJwt } from "../models/users";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/index";

export interface userAuth extends Request {
  user: UserJwt;
}

export const authorizeUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const tokenInCookie = req.cookies.access_token;
  if (!tokenInCookie)
    throw new BadRequestError("Not authorized to access this route");
  try {
    const payload = jwt.verify(
      tokenInCookie,
      process.env.JWT_SECRET as string
    ) as UserJwt;
    req.user = { email: payload.email, id: payload.id };
    next();
  } catch (error) {
    throw new BadRequestError("Not authorized to access this route");
  }
};
