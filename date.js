const today = new Date();
const date = new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(1991,0,26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString());