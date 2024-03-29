import { Invoice } from "./class/Invoice.js";
import { Payment } from "./class/Payment.js";
import { ListTemplate } from "./class/ListTemplate.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

// const invOne = new Invoice('mario', 'work on the mario Website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.value)
    }else {
    doc = new Payment(tofrom.value, details.value, amount.value)
    }
    console.log(doc);

    list.render(doc, type.value, 'end')
});