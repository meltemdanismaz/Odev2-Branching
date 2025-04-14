//----------func define

function merhaba(name,age){
    if(typeof name =="undefined") name ="Bilgi yok"
    if (typeof age =="undefined") age = "Bilgi yok"
    console.log(`İsim:${name} Yaş:${age}`)
}

merhaba(); //burada undedfined döndü çünkü fonksiyon parametre almadı 
merhaba("meltem", 23)

//-------------------arrow function and function expression
const kare = (value)=>{   //bu arrow function
    return value*value
}
const value =4; //dışarıda tanımlıyoruz fonk içinde tanımlasak js bunu tanımayacaktı referance error alacaktık
//yani Fonksiyon içindeki value sadece fonk içinde geçerli olacaktı
console.log("karesi:" , kare(16))
console.log(`${value} nin karesi ${kare(value)}`)

//💡 Function Expression nedir?
const selam = function(){
    console.log("selam")
}
//Bir fonksiyonu adı olmadan tanımlayıp bir değişkene atamaktır. 
//function meltem demiyoruz da  yazarken yukarıdaki gibi yapıyoruz

//Function Expression'ın daha kısa ve modern yazımı Arrow Function.

//IIFE (Immediately Invoked Function Expression)
//Tanımlandığı anda kendi kendine çalışan fonksiyon

// Doğru yazdığım halde hata alıyorum
// (function(name){
//     var a = 5;
//     console.log("merhaba", name);
// })("Meltem");

// 🔐 Neden kullanılır?
// Kodları izole etmek için
// Küresel (global) değişkenleri kirletmemek için
// Geçici işlemler yapıp hemen çıkmak için

//IIEF ARROW FUNC HALİ
// ((sayi)=>{
//     console.log(sayi*sayi)
// })(20);

//------------nesne içinde function tanımlama
const database = {
    host : "localhost",
    add:(değer)=>{ //arrow f
        console.log(değer,"eklendi")
    },
    get:function(){  //klasik fonksiyon
        console.log("veriler alındı")
    },
    update:(id)=>{ // bu da arrow f
        console.log(`id:${id} güncellendi`)
    }
}

database.add(10)
database.get();
database.update(2)


