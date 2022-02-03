import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { assert } from "superstruct";
import { PrismaClient } from "@prisma/client";
import { hashPasswords } from "../middleware/hashing";
import { ValidateUser, ValidateLogin } from "../validation/auth";
import { Users, User } from "../models/auth";
import { BadRequestError } from "../errors/index";

const prisma = new PrismaClient();

prisma.$use(hashPasswords);

export const createUser = async (req: Request, res: Response) => {
  const user: User = req.body;
  assert(user, ValidateUser);
  const newUser = await Users(prisma.user).createUser(user);
  const token = Users(prisma.user).createJwt({
    id: newUser.id,
    email: newUser.email,
  });
  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(StatusCodes.CREATED)
    .json({ msg: "Token successfully created" });
};

export const login = async (req: Request, res: Response) => {
  const userCredentials: Omit<User, "name"> = req.body;
  assert(userCredentials, ValidateLogin);
  const user = await Users(prisma.user).getUser(userCredentials);
  if (!user) {
    throw new BadRequestError("Email does not exist");
  }
  const password = await Users(prisma.user).decode(
    userCredentials.password,
    user.password as string
  );
  if (!password) {
    throw new BadRequestError("Password is incorrect please re-enter");
  }
  const token = Users(prisma.user).createJwt({
    id: user.id,
    email: user.email as string,
  });
  res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(StatusCodes.OK)
    .json({ msg: "Token successfully created" });
};
