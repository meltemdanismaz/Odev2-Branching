let value;
//string çevirme

// value = String(123)
// console.log(value)
// console.log(typeof value)
// //bu şekilde sayı da yazsak stringe çevirmek kolay
// value = String(3.14)
// value = String(true)
// value = String(function yaz(){console.log("deneme")})
// //fonkiyonun metin hali dönüyor yani çıktı bu oluyor : function yaz(){console.log("deneme")}
// console.log(value)
// value = String([1,2,3,4])


// value = (10).toString();
// console.log(value)
// console.log(typeof value)
// value = (3.14).toString();
// console.log(value)
// console.log(typeof value)


//---Sayıya Çevirme

value = Number('5')
console.log(value)
console.log(typeof value)

value = Number('meltem')
console.log(value)
console.log(typeof value)
// 'meltem' → sayı değil, dolayısıyla JavaScript onu sayısal değere çeviremez.
// Ama hala number türündedir 
// Çünkü JavaScript’te NaN, bir başarısız sayısal dönüşümün sonucudur.

value = Number(null)
console.log(value, typeof value)
//0 dönerrr
// çünkü js mantığı şu : “Bu değişken boş ama bilinçli olarak boş bırakılmış.
// Sayılaştırırsam, ‘hiçbir şey’ demek — o zaman 0 diyeyim.”
value = Number(undefined)
console.log(value, typeof value)
// NAN : Ben bu şeyin ne olduğunu bilmiyorum, o yüzden sayıya çeviremem

value = parseInt(3.14)
console.log(value, typeof value)

value = parseFloat("3.546")
console.log(value, typeof value)
//parseFloat("3.567") → string içindeki ondalıklı sayı başarıyla okunur bu sayede string ifade sayıysa çevrilmiş oldu
