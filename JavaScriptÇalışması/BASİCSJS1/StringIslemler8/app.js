let value;
const firstname = "meltem"
const lastname = "dnsmz"

value = firstname.concat(" ", lastname)
console.log(value)

value = firstname.toLowerCase()
console.log(value)
value = lastname.toUpperCase()
console.log(value)

value= firstname[0]
console.log(value)
value = firstname[firstname.length-1] //son harfi alıyorum -1 yazarak meltem 6 harfli - 1 5.indexe geldik yani son harf(0 dan başlıyor ya)
console.log(value)

value = firstname.indexOf("e") //-1 döndü neden çünkü b elemanı yok bizde mesela e girsem 1 döner 1.indexte e var 
console.log(value)

value = firstname.charAt(4)  //index 4 deki karakter ne ? m e l t e m bakalım 0 1 2 3 4 5  yani index 4te e harfi var
console.log(value)

//--------split
const langs = "Node.js, C#, Python, R";
value = langs.split(",") //, e göre böl dedik
console.log(value)

//-----replace
value = langs.replace("R", "React Native")
console.log(value)


//-------include

value = langs.toLowerCase().includes("Node.js".toLowerCase())
console.log(value)
//True ya da false döneryani içinde geçiyor mu sorusunun cevabı harfleri küçültüyoruz ki buna takılıp false demesin
