import { GiftRepository } from "../repositories/gift-repository";

interface RemoveGiftRequest {
  id: string;
}

type RemoveGiftResponse = void;

export class RemoveGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: RemoveGiftRequest): Promise<RemoveGiftResponse> {
    const { id } = request;

    await this.giftRepository.remove(id);
  }
}
