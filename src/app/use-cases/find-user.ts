import { User } from "../entities/user";
import { UserRepository } from "../repositories/user-repository";

interface FindUserRequest {
  userId: string;
}

interface FindUserResponse {
  user: User;
}

export class FindUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: FindUserRequest): Promise<FindUserResponse | null> {
    const { userId } = request;

    const user = await this.userRepository.findById(userId);

    if (!user) {
      return null;
    }

    return { user };
  }
}
