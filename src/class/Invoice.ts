import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: string,
    ){}

    format() {
        return `${this.client} owes N${this.amount} for ${this.details}` 
    }
}
