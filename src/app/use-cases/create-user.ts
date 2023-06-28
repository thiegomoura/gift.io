import { User } from "../entities/user";
import { UserRepository } from "../repositories/user-repository";

interface CreateUserRequest {
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  password: string;
}

interface CreateUserResponse {
  user: User;
}

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { firstName, lastName, birthday, email, password } = request;

    const user = new User({
      firstName,
      lastName,
      birthday,
      email,
      password,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
