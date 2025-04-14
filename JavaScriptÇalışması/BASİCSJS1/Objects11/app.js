export const programmer = {
    isim : "Meltem Danışmaz",
    age : 23,
    email_ : "meltem@gmail.com",
    langs : ["pyhton", "react", "react native", "node.js"],
    address : {
        city : "İstanbul",
        district : "Beyoğlu"
    },
    work:()=>{
        console.log("Şuanda çalışıyor")
    }

}

let value;
value = programmer.email_;
console.log(value)
value = programmer.langs[0];
console.log(value)
value = programmer.address.city;
console.log(value)
value = programmer.work();


//-----object array oluşturma
const data_engineer = [
    {name : "Meltem" , age : 23},  //bunların hepsi object
    {name : "Melike", age : 23}
]

value = data_engineer[0].name
console.log(value)
value = data_engineer[1].age
console.log(value)


