import { UpdateGift } from "@/app/use-cases/update-gift";
import gifRepositoryFactory from "../repositories/gift-repository-factory";

export default function updateGiftFactory(){
    return new UpdateGift(gifRepositoryFactory())
}