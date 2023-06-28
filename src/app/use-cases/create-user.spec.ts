import { InMemoryUsersRepository } from "../../../test/repositories/in-memory-users-repository";
import { CreateUser } from "./create-user";

describe("Create user", () => {
  it("should be able to create a user", async () => {
    const userRepository = new InMemoryUsersRepository();
    const createUser = new CreateUser(userRepository);

    const { user } = await createUser.execute({
      firstName: "John",
      lastName: "Doe",
      birthday: new Date(),
      email: "john.doe@mail.com",
      password: "password",
    });

    expect(userRepository.users).toHaveLength(1);
    expect(userRepository.users[0]).toEqual(user);
  });
});
