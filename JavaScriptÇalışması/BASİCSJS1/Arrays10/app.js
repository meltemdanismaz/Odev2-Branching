let value ;
let numbers= [5,10,15,20,25];

numbers.push("deneme")  //Listenin sonuna eleman eklemek için
console.log(numbers)

numbers.unshift(3.14) //listenin başına ekler
console.log(numbers)

console.log("index :", numbers.indexOf(5)) //5 hangi indexte ise onu gösterir mesela bizim listede 1 de o yüzden index : 1 olacak çıktı


value = numbers.pop() //listenin sonundan eleman çıkarmak için
console.log("çıkarılan eleman: ", value)

value_2 = numbers.shift() //listenin başından eleman çıkarmak için
console.log("çıkarılan eleman :", value_2)
console.log(numbers)


const aa = numbers.splice(1,2); //ilki index ikincisi kaç adet silinecek?
console.log("pops:", aa)

//let numbers = [5, 10, 15, 20, 25];
// Index 1’den başla → bu 10
// Oradan itibaren 2 eleman sil → 10 ve 15
// Bu iki eleman aa değişkenine atanır
//numbers dizisi artık şöyle olur: [5, 20, 25]

console.log(numbers)


//-------reverse
numbers.reverse();  //diziyi terse çevirir
console.log(numbers)

//-------sort
numbers.sort((x,y)=>{
    return x-y //küçükten büyüğe sıralamak
})
console.log(numbers)

numbers.sort((x,y)=>{
    return y-x //büyükten küçüğe sıralamak için
})

console.log(numbers)


