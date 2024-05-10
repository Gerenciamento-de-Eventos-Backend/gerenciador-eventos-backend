import userService from "../../services/database/user";

export class User {
    name: string;
    cpf: string;
    phone: string;
    email: string;
    password: string;

    constructor({
        name,
        cpf,
        phone,
        email,
        password,
    }: {
        name: string;
        cpf: string;
        phone: string;
        email: string;
        password: string;
    }) {
        this.name = name;
        this.cpf = cpf;
        this.phone = cpf;
        this.email = email;
        this.password = password;
    }
    async create() {
        const response = await userService.create(this);
        return response;
    }
}