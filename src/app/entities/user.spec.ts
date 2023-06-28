import { describe, expect } from '@jest/globals';
import { User } from "./user"

describe('User', () => {
    it('should be able to create a user', () => {
        const user = new User({
            firstName: 'John',
            lastName: 'Doe',
            birthday: new Date(),
            email: 'john.doe@mail.com',
            password: 'password'
        })

        expect(user).toBeTruthy();
    })
})