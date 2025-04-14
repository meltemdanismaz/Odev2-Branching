const langs = ["python", "react", "node.js", "R"]

for(let i=0; i<langs.length; i++){
   // console.log(langs) // bu şekilde yaparsam aynı diziyi alt alta yazdırır
    console.log(langs[i]) //bu şekilde ise liste içi elemanları tek tek yazdırır
}

//for of yapısı for un aynısı daha okunabilir olanı
console.log("tekrar yazdırılıyor")
for (let lang of langs){
    console.log(lang)
}

//foreach içine callback alarak çalışıyor
console.log("-----tekrar  yazdırılıyor")
langs.forEach(lang =>{ //bu kısım callback kısmı yani foreach diyor ki Ben her eleman için senin verdiğin fonksiyonu çağıracağım.
    console.log(lang)
})

//----lang index
console.log("lang - index")
langs.forEach((lang,index)=>{
    console.log(lang, index)

})

//mesela biz kendimiz yazalım

console.log("*******deneme*******")
const yazdir = (dil)=>{
    console.log("dilin adı",dil)
}
langs.forEach(yazdir)

//-----------
const users=[
    {name:"meltem" , age : 23},
    {name: "ömer", age : 23},
    {name:"umay", age:4},
    {name:"sare", age:6}
]
//sadece isimleri alıp bir listeye atamak istiyorsam map kullanabilirm
//map dizi üretir
const names = users.map(
    function(user){
        return user.name
    }
);

console.log(names)

const names2 = users.map(
    (user)=>{
        return user.name

    }
)

console.log("denemek içim", names2)

const gencYasli = users.map(
    function(kişiler){
        if (kişiler.age<20) return "çocuk"
        else return "yetişkin"
    });

console.log(gencYasli);
//[ 'yetişkin', 'yetişkin', 'çocuk', 'çocuk' ] çıktısını aldık


//For in
//for...in → nesnenin key’leri üzerinde döner (name, age gibi)

const user = {
  name:"defne",
  age:1
}

// 🚨 NOT:for...in sadece nesnelerde kullanılır, çünkü nesneler key: value yapısına sahiptir. !!!!!

for(key in user){
    console.log(key,user[key]);  //user[key] =value
}

//----------------------
//users bir dizi, ve içinde birden çok nesne (object) var.
//bu dizinin elemanlarına for of ya da for of la erişebilirim ama nesne içime for inle gireceğim

let index =0;
for(const user of users){
    index +=1
    console.log("-------User: " , index)
    for(const key in user){
        console.log(key, user[key])
    }
}


