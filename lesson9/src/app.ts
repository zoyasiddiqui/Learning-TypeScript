
// the ! at the end of this line of code is important
const anchor = document.querySelector('a')!;

// here's the code we'd need to use without the !
// if (anchor) {
//     console.log(anchor.href);
// }

// if we do use it...
console.log(anchor.href);

// here, we have "as HTMLFormElement" instead of the !
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//input
// the # are for ids
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;