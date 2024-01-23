import { Invoice } from "./class/Invoice.js";
import { Payment } from "./class/Payment.js";
// const invOne = new Invoice('mario', 'work on the mario Website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.value);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.value);
    }
    console.log(doc);
});
