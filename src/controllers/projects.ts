import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Projects } from "../models/projects";
const prisma = new PrismaClient();

export const postProject = async (req: Request, res: Response) => {
  const post = req.body;
  const newProject = await (await Projects(prisma.project)).createProject(post);
  res.status(StatusCodes.CREATED).json({ newProject });
};
