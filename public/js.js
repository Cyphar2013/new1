"use strict";
class invoice {
}
(this.client = c);
this.client = d;
this.amount = a;
format();
{
    return `${this.client} owes N${this.amount} for ${this.details}`;
}
const invOne = new invoice('mario', 'work on the mario Website', 250);
const invTwo = new invoice('luigi', 'work on the luigi website', 300);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});