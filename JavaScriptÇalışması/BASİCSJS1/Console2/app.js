var a = 1234;
console.log("merhaba js")
console.log(a)


function degistir(){
    document.getElementById("msg").style.color= "cornflowerblue"   
    //document Tarayıcıda çalışan JavaScript'in görebildiği tüm HTML sayfasını temsil eder.
    //.getElementById("msg") Bu, HTML sayfasında id'si "msg" olan elementi bul demektir.
}
var isimler = ["meltem", "ömer", "umay"]
console.log(isimler)
console.log(isimler[0])
console.log(typeof isimler)  //JavaScript'te diziler (arrays) aslında bir özel türde nesnedir (object).

console.warn("bu bir uyarıdır")
console.error("sayfa bulunamadı")

