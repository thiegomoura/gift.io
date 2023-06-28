import { IController, IRequest, IResponse } from "@/app/http";
import { ReceiveGift } from "@/app/use-cases/receive-gift";

export class ReceiveGiftController implements IController {
  constructor(private receiveGift: ReceiveGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    await this.receiveGift.execute({
      id,
    });

    return {
      statusCode: 204,
    };
  }
}
