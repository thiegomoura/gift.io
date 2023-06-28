import { CreateUser } from "../../../app/use-cases/create-user";
import { CreateUserBody } from "../dtos/create-user-body";
import { UserViewModel } from "../view-models/user-view-model";

export class UserController {
    constructor(private createUser: CreateUser) { }

    async create(body: CreateUserBody) {
        const { firstName, lastName, birthday, email, password } = body;

        const { user } = await this.createUser.execute({
            firstName,
            lastName,
            birthday,
            email,
            password
        })

        return {
            user: UserViewModel.toHTTP(user)
        };
    }
}