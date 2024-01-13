class invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string a:number) (
        this.client = c;
        this.client = d;
        this.amount = a;

    )

    format() {
        return `${this.client} owes N${this.amount} for ${this.details}` 
    }
}

const invOne = new invoice('mario', 'work on the mario Website', 250);
const invTwo = new invoice('luigi', 'work on the luigi website', 300)


const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    );
});