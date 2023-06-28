import { CreateUser } from "@/app/use-cases/create-user";
import userRepositoryFactory from "../repositories/user-repository-factory";

export default function createUserFactory(){
    return new CreateUser(userRepositoryFactory())
}