let value;

const now = new Date();
console.log(now)

//----manuel date
const date1 = new Date("11/27/2002")
console.log(date1)

console.log(now.getMonth() +1)
console.log(now.getDate()) //günü veriyor

const dayNames = ["pzr", "pzrts", "salı", "çrşmb", "prşmb", "cuma", "cmrts"];
value= date1.getDay();
console.log(dayNames[value])

