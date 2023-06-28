import { UserRepository } from "@/app/repositories/user-repository";
import { PrismaUserRepository } from "@/infra/database/prisma/prisma-user-repository";
import { Router } from "express";
import { CreateUser } from "../../../app/use-cases/create-user";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

const createUser = new CreateUser(
  PrismaUserRepository as unknown as UserRepository
);

const user = new UserController(createUser);

userRouter.get("/", () => "Hello");
userRouter.post("/", user.create);

export default userRouter;
