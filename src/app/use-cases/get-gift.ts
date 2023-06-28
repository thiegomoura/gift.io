import { Gift } from "../entities/gift";
import { GiftRepository } from "../repositories/gift-repository";

interface GetGiftRequest {
  id: string;
}

interface GetGiftResponse {
  gift: Gift;
}

export class GetGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: GetGiftRequest): Promise<GetGiftResponse> {
    const { id } = request;

    const gift = await this.giftRepository.findById(id);

    return {
      gift,
    };
  }
}
