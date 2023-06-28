import { GetUserGiftController } from "@/infra/http/controllers/get-user-gift.controller";
import getUserGiftFactory from "../use-cases/get-user-gift-factory";

export default function getUserGiftControllerFactory() {
  return new GetUserGiftController(getUserGiftFactory());
}
