import productionService from "../../services/database/production";

//posteriormente alterar o conteúdo do user
export class production {
    name: string;
    local: string;
    date: Date;
    tickets: number;

    constructor({
        name,
        local,
        date,
        tickets,
    }: {
        name: string;
        local: string;
        date: Date;
        tickets: number;
    }) {
        this.name = name;
        this.local = local;
        this.date = date;
        this.tickets = tickets;
    }
    async create() {
        const response = await productionService.create(this);
        return response;
    }
}