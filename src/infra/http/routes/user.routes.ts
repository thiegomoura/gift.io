import adaptHttp from "@/infra/adapters/http-json-adapter";
import createUserControllerFactory from "@/infra/factories/http/create-user-controller-factory";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", adaptHttp(createUserControllerFactory()));

export default userRouter;
