const adsoyad = "Meltem Danışmaz"
const departman = "Yazılım Mühendsliği"
const salary = 120000

const kisi = "İsim: " + adsoyad + "\ndepartman : " + departman + "\nMaaş: " + salary;
console.log(kisi)

//backtick ile daha kolay yaızlır

const kisi1 = `İsim:${adsoyad} \nDepartman:${departman} \nMaaş:${salary}`
console.log(kisi1)

const kisi2 = `İsim : ${adsoyad} \nDepartman: ${departman} \nMaaş: ${salary}`
console.log(kisi2, typeof kisi2)


//-----arrow funk
const arrowfunc =(x, y)=>{
    return x+y;
    // c = (x + y);
    // console.log(c)
}

// arrowfunc(5,4)

//HTML içine JavaScript ile dinamik veri ekleme 

const html = `
                <ul>
                <li>${adsoyad}</li>
                <li>${departman}</li>
                <li>${salary}</li>
                <li>${arrowfunc(5,4)}</li>
                </ul>
                
`
//html kodları içinde idsi olan div var onu buluver diyoruz
const element = document.getElementById("liste")

//heh buldun mu ? o div içine bu kodları ekle canım
element.innerHTML = html;
//HTML sayfasındaki id="liste" olan div'in içeriğini, html değişkeninde tuttuğum HTML kodlarıyla değiştir. demek
console.log(element)










