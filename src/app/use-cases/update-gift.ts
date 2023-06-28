import { Gift } from "../entities/gift";
import { GiftRepository } from "../repositories/gift-repository";

interface UpdateGiftRequest {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

interface UpdateGiftResponse {
  gift: Gift;
}

export class UpdateGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: UpdateGiftRequest): Promise<UpdateGiftResponse> {
    const { id, description, title, link, thumbnail } = request;

    const updatedGift = await this.giftRepository.update({
      id,
      description,
      title,
      link,
      thumbnail,
    });

    return { gift: updatedGift };
  }
}
