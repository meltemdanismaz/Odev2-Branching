let value;
const a = 50, b =10;

value = a+ b
value = a - b
value = a*b 
value = a/b 
value = a%b
console.log(value)

value = Math.ceil(3.2)  //Verilen ondalıklı sayıyı yukarı yuvarlar (en yakın bir üst tam sayıya). mesela burada 4
console.log(value)

value = Math.floor(3.2) // bu da en yakın sayıya yani 3 oluyor
console.log(value)

value = Math.sqrt(3)   //karekök almak için
console.log(value)  

value = Math.abs(-10)  //mutlak değer
console.log(value) 

value = Math.max(2, -1, 5, 7)
console.log(value)

value = Math.random();  // 0 ile 1 arasında değer üretir rastgele
console.log(value)

value = Math.random()*20  //böyle yaparak ise aralığı büyülttük 0 ile 20 oldu artık
console.log(value)

value = Math.random()*20+1   //bu şekilde ise 0-21 yaptık 
console.log(value)

value = Math.floor(Math.random()*20)   //böyle yaparak ise 0 -20 arası rastgele yası olsun ama tam sayı olsun diyoruz
console.log(value)

