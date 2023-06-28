import { GetGift } from "@/app/use-cases/get-gift";
import gifRepositoryFactory from "../repositories/gift-repository-factory";

export default function getGiftFactory(){
    return new GetGift(gifRepositoryFactory())
}