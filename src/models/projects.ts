import { PrismaClient, Project } from "@prisma/client";

export const Projects = async (prisma: PrismaClient["project"]) => {
  return Object.assign(prisma, {
    async createProject(data: Project) {
      return prisma.create({ data });
    },
    async getProject(id: string, projectId: string) {
      return prisma.findFirst({ where: { id: projectId, userId: id } });
    },
  });
};
