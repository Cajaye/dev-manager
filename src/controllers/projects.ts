import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { Projects } from "../models/projects";
const prisma = new PrismaClient();

export const postProject = async (req: Request, res: Response) => {
  const { body: post } = req;
  req.body.userId = req.user?.id;
  const Project = await Projects(prisma.project);
  const newProject = await Project.createProject(post);
  res.status(StatusCodes.CREATED).json({ newProject });
};

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Project = await Projects(prisma.project);
  const project = await Project.getProject(req.user?.id, id);
  res.status(StatusCodes.OK).json({ project });
};
