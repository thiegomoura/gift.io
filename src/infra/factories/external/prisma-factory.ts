import { PrismaClient } from "@prisma/client";

export default function prismaFactory() {
  return new PrismaClient();
}
