import { User } from "../../../app/entities/user";

export class UserViewModel {
    static toHTTP(user: User) {
        return {
            id: user.id,
            fullName: user.firstName.concat(' ', user.lastName),
            email: user.email,
            birthday: user.birthday
        }
    }
}