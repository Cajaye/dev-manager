import { Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

export const hashPasswords: Prisma.Middleware = async (params, next) => {
  //specify model and action
  if (params.model === "user" && params.action === "create") {
    const user = params.args.data;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  }
  return await next(params);
};
