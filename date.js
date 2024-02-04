const today = new Date();
const date = new Date('2026-10-09')// Works normally from 1;
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26);// work it by index
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
specificDate.setDate(23);
console.log(specificDate)
console.log(specificDate.toLocaleString('en-GB'))

// Convert date to second
// Unix epoc

