import { PrismaGiftRepository } from "@/infra/database/prisma/prisma-gift-repository";
import prismaFactory from "../external/prisma-factory";

export default function giftRepositoryFactory() {
  return new PrismaGiftRepository(prismaFactory());
}
