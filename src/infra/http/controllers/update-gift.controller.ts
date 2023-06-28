import { IController, IRequest, IResponse } from "@/app/http";
import { UpdateGift } from "@/app/use-cases/update-gift";

export class UpdateGiftController implements IController {
  constructor(private updateGift: UpdateGift) {}

  async handler(request: IRequest): Promise<IResponse> {
    const { id } = request.params;
    const { title, description, link, thumbnail } = request.body;

    const updatedGift = await this.updateGift.execute({
      id,
      title,
      description,
      link,
      thumbnail,
    });

    return {
      statusCode: 201,
      data: updatedGift,
    };
  }
}
