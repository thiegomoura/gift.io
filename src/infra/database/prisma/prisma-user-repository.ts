import { PrismaClient } from "@prisma/client";
import { User } from "../../../app/entities/user";
import { UserRepository } from "../../../app/repositories/user-repository";
import { PrismaUserMapper } from "../mappers/prisma-user-mapper";

export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaClient) {}

  async create(user: User): Promise<void> {
    const data = PrismaUserMapper.toPrisma(user);

    await this.prismaService.user.create({ data });
  }

  async findById(userId: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) return null;

    return user as User;
  }
}
