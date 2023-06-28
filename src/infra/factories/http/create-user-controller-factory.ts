import { CreateUserController } from "@/infra/http/controllers/create-user.controller";
import createUserFactory from "../use-cases/create-user-factory";

export default function createUserControllerFactory() {
  return new CreateUserController(createUserFactory());
}
