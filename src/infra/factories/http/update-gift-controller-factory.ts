import { UpdateGiftController } from "@/infra/http/controllers/update-gift.controller";
import updateGiftFactory from "../use-cases/update-gift-factory";

export default function updateGiftControllerFactory() {
  return new UpdateGiftController(updateGiftFactory());
}
