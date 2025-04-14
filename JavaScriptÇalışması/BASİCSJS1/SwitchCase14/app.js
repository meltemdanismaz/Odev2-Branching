console.log(!(2==3)) //not
console.log(4==3 && 5==5); //and
console.log(4==3 || 5==5) //or

//---if else
const process = 2;
if(process ==1){
    console.log("işlem 1")
}
else if(process == 2){
    console.log("işlem 2")

}else{
    console.log("belirsiz işlem")
}

const ort =55;
if(ort>=50){
    console.log("Geçti");
}
else console.log("Kaldı")

//Ternary Op
console.log(ort>=50?"Geçti":"Kaldı")
console.log(ort<50?"Kaldı":"Geçti")

let kontrol, sifre = 123;
if(sifre ==123) kontrol = true;
else kontrol=false;

//ternary op
kontrol = sifre==123?true:false
console.log(kontrol);




