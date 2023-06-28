import { Gift } from "../entities/gift";
import { IUpdateGift } from "../interfaces/IUpdateGift";

export interface GiftRepository {
  create(gift: Gift): Promise<void>;
  findById(id: string): Promise<Gift>;
  findByUserId(userId: string): Promise<Gift[]>;
  update(gift: IUpdateGift): Promise<Gift>;
  setToReceived(id: string): Promise<void>;
  remove(id: string): Promise<void>;
}
