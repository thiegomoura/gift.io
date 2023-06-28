import { Gift } from "../entities/gift";
import { GiftRepository } from "../repositories/gift-repository";

interface GetUserGiftRequest {
  id: string;
}

interface GetUserGiftResponse {
  gift: Gift[];
}

export class GetUserGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: GetUserGiftRequest): Promise<GetUserGiftResponse> {
    const { id } = request;

    const gift = await this.giftRepository.findByUserId(id);

    return {
      gift,
    };
  }
}
