import { PrismaUserRepository } from "@/infra/database/prisma/prisma-user-repository";
import prismaFactory from "../external/prisma-factory";

export default function userRepositoryFactory() {
  return new PrismaUserRepository(prismaFactory());
}
