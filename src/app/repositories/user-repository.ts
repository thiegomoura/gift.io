import { User } from "../entities/user";

export interface UserRepository {
    create(user: User): Promise<void>;
    findById(userId: string): Promise<User | null>;
}