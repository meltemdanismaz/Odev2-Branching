//Kendi objemizi ve listemizi oluşturalım
// var bilgi = [
//     {
//         name : "meltem",
//         surname :  "dnsmz",
//         age : 23,
//         kurum: [
//             {
//                 kurumid: 1,
//                 kurumadi : "vakıfbank"
//             },
//             {
//                 kurumid : 2,
//                 kurumadi: "turkcell"
//             }
//         ]
//     },
//     {
//         name : "melike",
//         surname : "dnsmz",
//         age : 23,
//         kurum:[
//             {
//                 kurumid : 1,
//                 kurumadi: "vakıfbank"
//             },
//             {
//                 kurumid:2,
//                 kurumadi: "turkcell"
//             }
//         ]
//     }
// ]


// console.log(typeof bilgi)
// console.log("meltem adlı kişinin çalıştığı ilk kurumun idsi")
// console.log("Kurum kodu: ", bilgi[0].kurum[0].kurumid) //meltem adlı kişinin çalıştığı ilk kurumun idsi
// console.log("melike adı kişinin çalıştığı ikinici kurumun adı")
// console.log("Kurum adı: ", bilgi[1].kurum[1].kurumadi) //melike adı kişinin çalıştığı ikinici kurumun adı


// // console.log diziyi doğrudan yazdırdığında, iç içe objeler için özet bilgi verir.
// // kurum: [ [Object], [Object] ] gibi
// // Eğer detaylı göstermek istersek
// console.log(JSON.stringify(bilgi, null, 2))


// //Date
// var date  = new Date();
// console.log(date, typeof date)
// //Date nesnesi JavaScript’te bir objedir.
// console.log("get date: ", date.getDate()); //gün bilgisi 
// console.log("date: ",date.getFullYear());
// console.log("Ay: ", date.getMonth()+ 1);
// // JavaScript’te aylar 0'dan başlar! O Yüzden Nisan Ayı 3 Geliyor +1 koyuyoruz ki tam ayı versin

//-------FUNCTİONS
 
// var helloFonksiyonu = function(){
//     console.log("Hello World")
// }
// helloFonksiyonu();
// // console.log(typeof helloFonksiyonu())
// console.log(helloFonksiyonu())


//--function lambda kullanımı
// var yazma =()=>{
//     console.log("hello lambda func")
// }
// yazma();
// console.log(typeof yazma);


//referans geçirme
var l1 = [1,2,3,4] //Ana liste
var l2 = l1  //l2, l1 ile aynı listeyi (aynı yeri) göstersin.” 
//Birini değiştirince, öteki de değişmiş olur çünkü aynı bellek adresini kullanırlar.
var l3 = l1.slice() //l1'in bir kopyasını oluştur, ve onu l3'e ata.
//Burada .slice() sayesinde yepyeni bir liste oluşur. Bu yüzden l3, artık l1'den bağımsızdır.
l1.push(5)

console.log(l1)
console.log(l2)
console.log(l3)

//çıktılarımız böyle olur: 
//[ 1, 2, 3, 4, 5 ]
//[ 1, 2, 3, 4, 5 ]
//[ 1, 2, 3, 4 ]

