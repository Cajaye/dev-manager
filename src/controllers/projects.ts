import { PrismaClient } from "@prisma/client";
import { Requser } from "../middleware/authentication";
import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Projects } from "../models/projects";
const prisma = new PrismaClient();

export const postProject = async (req: Requser, res: Response) => {
  const post = req.body;
  req.body.userId = req.user.id;
  const newProject = await (await Projects(prisma.project)).createProject(post);
  res.status(StatusCodes.CREATED).json({ newProject });
};
