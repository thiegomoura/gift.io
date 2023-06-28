import { GetGiftController } from "@/infra/http/controllers/get-gift.controller";
import getGiftFactory from "../use-cases/get-gift-factory";

export default function getGiftControllerFactory() {
  return new GetGiftController(getGiftFactory());
}
