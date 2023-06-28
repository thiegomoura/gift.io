import Router from "express";
import giftRouter from "./gift.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/gift", giftRouter)

export default routes;
