
//-------var
var a = "meltem"
console.log(a, typeof a)

a = "melcegm"
console.log(a, typeof a)

var a = "yeniden tanımlanır mı ? a"
console.log(a)

// Yeniden tanımlanabilir
// Aynı isimle tekrar var yazmak hata vermez



//-------let
let b = "melike"
console.log(b)
// let b = "yeniden tanımlanır mı ? b";   //burayı yorum satırı yapmazsak hata alıyoruz
// console.log(b)

// let ile tanımlanmış bir değişken, aynı blok içinde bir daha tanımlanamaz.
//peki nasıl kullanırız
b = "meltemmm"
console.log(b)   //bu şekilde let olmadan tanımlarız let bizi hatalardan korur aynı değişken adına iki değer atamayalım diye


for(var i=1; i < 5; i++){
    console.log(i*i)
}

console.log("for çıkışı i = ", i)

//burada i = 5 i görüyoruz peki ya let ile tanımlasaydık 
// for(let y=1; y<5; y++){
//     console.log(y*y)
// }
// console.log("for çıkışı:", y)
//hata aldıkkk ReferanceError hatası, çünkü let ile tanımlanan değişken, for bloğu dışına çıkamaz! 💥

//--------
const sabit = 3.14
console.log("sabit: ", sabit)
//sabitin değerini değiştirmeye çalışalım
// sabit = 3.1456
// console.log(sabit)
//HOOOOPP HATA ALDIKK TypeError Hatası peki neden ? const: bir değişkenin değerinin değiştirilemeyeceğini garanti eder.
//"Const ile tanımlanmış bir değişkene yeni bir değer atayamazsın!"

//aynı şeyi listede deneyelim yine hata alacağız
const list = [1,2,3]
console.log(list)
// list = [2,3,4]
//beklendiği gibi burada da hata aldık TypeError hatası 

//peki listeye eleman eklesek ya da ilk elemanı değiştirmeye çalışsak ?
list[0]= 4
list.push(5)
console.log(list)

//başarılı oldukkk çünkü : const ile tanımlanan bir dizi (array), içeriği değişebilir ama referansı değişemez.
//const dediğimizde, bu adres sabit olur, yani list = başka bir şey yasaktır.
// Buzdolabını başka bir modelle değiştiremezsin ❌
// Ama içine koyduğun yiyecekleri değiştirebilirsin ✅

// Object için deneyelim
const user = {
    name : "meltem",
    age : 23
}

user.name = "melike"  //bu çalışır 
//AMAAĞĞĞĞĞ :
// user = {
//     name : "melike",
//     age :23
// }

//yazarsam hata alırımm !!! TypeError hatası
console.log(user)

