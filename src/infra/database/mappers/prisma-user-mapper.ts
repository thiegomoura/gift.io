import { User } from "../../../app/entities/user";

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.birthday,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt
        }
    }
}