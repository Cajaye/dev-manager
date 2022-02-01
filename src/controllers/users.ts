import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";
import { hashPasswords } from "../middleware/hashing";
import { assert } from "superstruct";
import { ValidateUser } from "../validation/users";
import { Users, User } from "../models/users";

const prisma = new PrismaClient();

prisma.$use(hashPasswords);

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await Users(prisma.user).getAllUsers();
  const numOfUsers = await Users(prisma.user).count({});
  res.status(StatusCodes.OK).json({ users, amount: numOfUsers });
};

export const createUser = async (req: Request, res: Response) => {
  const user: User = req.body;
  const users = Users(prisma.user);
  assert(user, ValidateUser);
  const newUser = await users.createUser(user);
  const token = users.createJwt({ id: newUser.id, email: newUser.email });
  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(StatusCodes.CREATED)
    .json({ msg: "Token successfully created" });
};
