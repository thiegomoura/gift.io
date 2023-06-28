import { Gift } from "../entities/gift";
import { GiftRepository } from "../repositories/gift-repository";

interface CreateGiftRequest {
  userId: string;
  title: string;
  description: string;
  thumbnail?: string;
  link?: string;
}

interface CreateGiftResponse {
  gift: Gift;
}

export class CreateGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: CreateGiftRequest): Promise<CreateGiftResponse> {
    const { userId, title, description, thumbnail, link } = request;

    const gift = new Gift({
      userId,
      title,
      description,
      thumbnail,
      link,
    });

    await this.giftRepository.create(gift);

    return { gift };
  }
}
