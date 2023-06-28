import { GetUserGift } from "@/app/use-cases/get-user-gift";
import gifRepositoryFactory from "../repositories/gift-repository-factory";

export default function getUserGiftFactory(){
    return new GetUserGift(gifRepositoryFactory())
}