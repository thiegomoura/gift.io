import { RemoveGift } from "@/app/use-cases/remove-gift";
import gifRepositoryFactory from "../repositories/gift-repository-factory";

export default function removeGiftFactory(){
    return new RemoveGift(gifRepositoryFactory())
}