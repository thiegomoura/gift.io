import { IController, IRequest, IResponse } from "@/app/http";
import { GetGift } from "@/app/use-cases/get-gift";

export class GetGiftController implements IController {
  constructor(private getGift: GetGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    const { gift } = await this.getGift.execute({
      id,
    });

    return {
      statusCode: 200,
      data: gift,
    };
  }
}
