import { IController, IRequest, IResponse } from "@/app/http";
import { GetUserGift } from "@/app/use-cases/get-user-gift";

export class GetUserGiftController implements IController {
  constructor(private getUserGift: GetUserGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;

    const { gift } = await this.getUserGift.execute({
      id,
    });

    return {
      statusCode: 200,
      data: gift,
    };
  }
}
