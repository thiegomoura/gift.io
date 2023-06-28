import { ReceiveGift } from "@/app/use-cases/receive-gift";
import giftRepositoryFactory from "../repositories/gift-repository-factory";

export default function receiveGiftFactory(){
    return new ReceiveGift(giftRepositoryFactory())
}