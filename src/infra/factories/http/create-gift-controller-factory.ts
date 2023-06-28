import { CreateGiftController } from "@/infra/http/controllers/create-gift.controller";
import createGiftFactory from "../use-cases/create-gift-factory";

export default function createGiftControllerFactory() {
  return new CreateGiftController(createGiftFactory());
}
