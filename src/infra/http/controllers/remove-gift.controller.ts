import { IController, IRequest, IResponse } from "@/app/http";
import { RemoveGift } from "@/app/use-cases/remove-gift";

export class RemoveGiftController implements IController {
  constructor(private removeGift: RemoveGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    await this.removeGift.execute({
      id,
    });

    return {
      statusCode: 202,
    };
  }
}
