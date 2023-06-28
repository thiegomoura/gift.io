import { randomUUID } from "crypto";
import { Replace } from "../../helpers/Replace";

export interface UserProps {
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    password: string;
    createdAt: Date;
}

export class User {
    private _id: string;
    private props: UserProps;

    constructor(props: Replace<UserProps, { createdAt?: Date }>) {
        this._id = randomUUID()
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }

    public get id() {
        return this._id;
    }

    public set firstName(firstName: string) {
        this.props.firstName = firstName;
    }

    public get firstName(): string {
        return this.props.firstName;
    }

    public set lastName(lastName: string) {
        this.props.lastName = lastName;
    }

    public get lastName(): string {
        return this.props.lastName;
    }

    public set birthday(birthday: Date) {
        this.props.birthday = birthday;
    }

    public get birthday(): Date {
        return this.props.birthday;
    }

    public set email(email: string) {
        this.props.email = email;
    }

    public get email(): string {
        return this.props.email;
    }

    public set password(password: string) {
        this.props.password = password;
    }

    public get password(): string {
        return this.props.password;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}