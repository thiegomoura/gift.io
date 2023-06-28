import { ReceiveGiftController } from "@/infra/http/controllers/receive-gift.controller";
import receiveGiftFactory from "../use-cases/receive-gift-factory";

export default function receiveGiftControllerFactory() {
  return new ReceiveGiftController(receiveGiftFactory());
}
