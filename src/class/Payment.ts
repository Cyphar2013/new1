import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: string,
    ){}

    format() {
        return `${this.recipient} owes N${this.amount} for ${this.details}` 
    }
}
