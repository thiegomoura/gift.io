import adaptHttp from "@/infra/adapters/http-json-adapter";
import createGiftControllerFactory from "@/infra/factories/http/create-gift-controller-factory";
import getGiftControllerFactory from "@/infra/factories/http/get-gift-controller-factory";
import getUserGiftControllerFactory from "@/infra/factories/http/get-user-gift-controller-factory";
import receiveGiftControllerFactory from "@/infra/factories/http/receive-gift-controller-factory";
import removeGiftControllerFactory from "@/infra/factories/http/remove-gift-controller-factory";
import updateGiftControllerFactory from "@/infra/factories/http/update-gift-controller-factory";
import { Router } from "express";

const giftRouter = Router();

giftRouter.post("/:id", adaptHttp(createGiftControllerFactory()));
giftRouter.get("/:id", adaptHttp(getGiftControllerFactory()));
giftRouter.get("/user/:id", adaptHttp(getUserGiftControllerFactory()));
giftRouter.put("/:id", adaptHttp(updateGiftControllerFactory()));
giftRouter.patch("/:id/receive", adaptHttp(receiveGiftControllerFactory()));
giftRouter.delete("/:id", adaptHttp(removeGiftControllerFactory()));

export default giftRouter;
