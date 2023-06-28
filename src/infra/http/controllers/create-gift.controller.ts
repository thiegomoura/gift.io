import { IController, IRequest, IResponse } from "@/app/http";
import { CreateGift } from "@/app/use-cases/create-gift";
import { GiftViewModel } from "../view-models/gift-view-model";

export class CreateGiftController implements IController {
  constructor(private createGift: CreateGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;
    const { title, description, thumbnail, link } = request.body;

    const { gift } = await this.createGift.execute({
      userId: id,
      title,
      description,
      thumbnail,
      link,
    });

    return {
      statusCode: 201,
      data: {
        user: GiftViewModel.toHTTP(gift),
      },
    };
  }
}
