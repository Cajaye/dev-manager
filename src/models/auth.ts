import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient, Prisma, user } from "@prisma/client";
export type UserJwt = Pick<Prisma.userCreateArgs["data"], "id" | "email">;
export type User = Omit<Prisma.userCreateArgs["data"], "id">;

export const Users = (prisma: PrismaClient["user"]) => {
  return Object.assign(prisma, {
    async createUser(data: User): Promise<user> {
      return prisma.create({ data });
    },
    async getUser(credentials: Omit<User, "name">) {
      return prisma.findUnique({
        where: { email: credentials.email },
      });
    },
    createJwt({ id, email }: UserJwt) {
      return jwt.sign({ id, email }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
      });
    },
    async decode(password: User["password"], hash: User["password"]) {
      return await bcrypt.compare(password, hash);
    },
  });
};
