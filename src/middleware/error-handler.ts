import { NextFunction, Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { StructError } from "superstruct";
import { CustomAPIError } from "../errors/custom-error";

interface Errors {
  msg: string;
  statusCode: number;
}

export const errorHandlerMiddleWare = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorObject: Errors = {
    msg: "Something went wrong try again later" || err.message,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR || err.statusCode,
  };
  if (err instanceof CustomAPIError) {
    errorObject.msg = err.message;
    errorObject.statusCode = err.statusCode;
  }
  if (err instanceof StructError) {
    const { key, refinement, value } = err;
    if (value === undefined) {
      errorObject.statusCode = StatusCodes.BAD_REQUEST;
      errorObject.msg = `${key} is required`;
    }
    if (refinement == "email") {
      errorObject.statusCode = StatusCodes.BAD_REQUEST;
      errorObject.msg = `Enter a valid ${refinement} address`;
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      errorObject.statusCode = StatusCodes.BAD_REQUEST;
      errorObject.msg = "Try entering another email this one already exists";
    }
  }
  //return res.status(400).json({ err });
  return res.status(errorObject.statusCode).json({ msg: errorObject.msg });
};
