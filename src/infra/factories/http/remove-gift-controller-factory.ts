import { RemoveGiftController } from "@/infra/http/controllers/remove-gift.controller";
import removeGiftFactory from "../use-cases/remove-gift-factory";

export default function removeGiftControllerFactory() {
  return new RemoveGiftController(removeGiftFactory());
}
