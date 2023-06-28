import { Gift } from "../../../app/entities/gift";

export class PrismaGiftMapper {
  static toPrisma(gift: Gift) {
    return {
      id: gift.id,
      userId: gift.userId,
      title: gift.title,
      description: gift.description,
      thumbnail: gift.thumbnail,
      link: gift.link,
      receivedAt: gift.receivedAt,
      createdAt: gift.createdAt,
    };
  }
}
