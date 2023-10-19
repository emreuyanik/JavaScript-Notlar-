// //hoisting yöntemi, bellekte yer tuttuğu için efektif değil

// // 2.function expression yöntemi ile fonk. tanımlama//

// // const topla = function (a,b){
// // return a + b
// // }

// // console.log("Toplam:", topla(3,7));

// // ****************

// const tekVeyaCift = function (num) {
//   const result = num % 2 ? "Tek" : "Cift"; // num%2 ===0 da yazılabilir
//   return `${num} ${result}dir`;
// };

// console.log(tekVeyaCift(6));

// //*****************

// const bulEnBuyuk = function (s1, s2, s3) {
//   return Math.max(s1, s2, s3);
// };

// console.log("En buyuk sayi: ", bulEnBuyuk(4, 2, 7));

// // 3.Arrow function...............// single statement fn.larda daha avantajlı

// const yaz = () => console.log("hello js");
// yaz();

// // ***********************************

// const kareAl = (num) => num * num;
// console.log("kare:", kareAl(5));

// // ***********************************

// const hesapla = (x, y) => {
//   const toplam = x + y;
//   const carpim = x * y;
//   const sonuc = carpim / toplam;
//   return sonuc;
// };

// console.log("sonuc:", hesapla(4, 2));

// // ***********************************

// const yasHesapla = (dob) => new Date().getFullYear() - dob;

// console.log("yas:", yasHesapla(1984));

// const silindirHacim = (r, h) => Math.PI * r * r * h;
// console.log(`Hacim= ${silindirHacim(2, 3)}`);

// // ***********************************

// const topla = (a, b) => a + b;
// const cikar = (a, b) => a - b;
// const carp = (a, b) => a * b;
// const bol = (a, b) => a / b;

// const hesapMakinesi = (num1, num2, op) => {
//   let result = 0
//   switch (op) {
//     case "+":
//         result = topla(num1, num2);
//         break;
//     case "-":
//         result = cikar(num1, num2);
//         break;
//     case "*":
//         result = carp(num1, num2);
//         break;
//     case "/":
//         result = bol(num1, num2);
//         break;
//     default:
//         alert("yanlıs islem girisimi")
//         break
//   }
//   return result;
// }

// const num1 = +prompt("1.sayi");
// const num2 = +prompt("2.sayi");
// const op = prompt("islemi giriniz: +,-,*,/");

// // console.log(hesapMakinesi(num1, num2, op));

// console.log(`${num1} ${op} ${num2} = ${hesapMakinesi(num1, num2, op)}`);


// ***********************************
// scope
// let num1 = 11
let num2 = 22

const fn = () => {
    let num1 = 44 // scoped değişken
    num1++
    return num1
}

const num1 = fn()
console.log(num1);// 45

// ***********************************
{
    let x = 5
    x++
    let y = x+15
    console.log(y);// blocked scope değişken, süslünün dışında y ye erişemezsin
}

