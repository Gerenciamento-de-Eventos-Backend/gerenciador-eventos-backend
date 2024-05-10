import userService from "../../services/database/user";

//posteriormente alterar o conteúdo do user
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
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    async create() {
        const response = await userService.create(this);
        return response;
    }
}