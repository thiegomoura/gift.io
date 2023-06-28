import { GiftRepository } from "../repositories/gift-repository";

interface ReceiveGiftRequest {
  id: string;
}

type ReceiveGiftResponse = void;

export class ReceiveGift {
  constructor(private giftRepository: GiftRepository) {}

  async execute(request: ReceiveGiftRequest): Promise<ReceiveGiftResponse> {
    const { id } = request;

    await this.giftRepository.setToReceived(id);
  }
}
