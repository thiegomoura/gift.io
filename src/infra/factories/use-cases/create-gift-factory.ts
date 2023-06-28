import { CreateGift } from "@/app/use-cases/create-gift";
import gifRepositoryFactory from "../repositories/gift-repository-factory";

export default function createGiftFactory(){
    return new CreateGift(gifRepositoryFactory())
}