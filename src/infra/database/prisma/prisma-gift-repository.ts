import { IUpdateGift } from "@/app/interfaces/IUpdateGift";
import { GiftRepository } from "@/app/repositories/gift-repository";
import { PrismaClient } from "@prisma/client";
import { Gift } from "../../../app/entities/gift";
import { PrismaGiftMapper } from "../mappers/prisma-gift-mapper";

export class PrismaGiftRepository implements GiftRepository {
  constructor(private prismaService: PrismaClient) {}

  async create(gift: Gift): Promise<void> {
    const data = PrismaGiftMapper.toPrisma(gift);

    await this.prismaService.gift.create({ data });
  }

  async findById(id: string): Promise<Gift> {
    const gift = await this.prismaService.gift.findUniqueOrThrow({
      where: { id },
    });
    
    return gift as Gift;
  }

  async findByUserId(userId: string): Promise<Gift[]> {
    const gifts = await this.prismaService.gift.findMany({
      where: { userId },
    });

    return gifts as Gift[];
  }

  async update(_gift: IUpdateGift): Promise<Gift> {
    const { id, title, description, link, thumbnail } = _gift;

    await this.prismaService.gift.findUniqueOrThrow({
      where: { id },
    });

    const updatedGift = await this.prismaService.gift.update({
      where: { id },
      data: { title, description, link, thumbnail },
    });

    return updatedGift as Gift;
  }

  async setToReceived(_id: string): Promise<void> {
    const { id } = await this.prismaService.gift.findUniqueOrThrow({
      where: { id: _id },
    });

    await this.prismaService.gift.update({
      where: { id },
      data: { receivedAt: new Date() },
    });
  }

  async remove(_id: string): Promise<void> {
    const { id } = await this.prismaService.gift.findUniqueOrThrow({
      where: { id: _id },
    });

    await this.prismaService.gift.delete({ where: { id } });
  }
}
