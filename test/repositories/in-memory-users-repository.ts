import { User } from "../../src/app/entities/user";
import { UserRepository } from "../../src/app/repositories/user-repository";

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId);

    if (!user) return null;

    return user;
  }
}
