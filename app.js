// console.log("harici APP.js kodu calisti");
// document.write("DOM'a yazı bas");
// // karar = confirm("devam etmek ister misiniz: E/H");
// // console.log(karar);

// if (karar == true) {
//   console.log(karar);
// }
// console.warn("UYARI");
// console.error("Hata");

// değişken tanımlama

const num1 = 5;
let num2 = 6;

console.log(num1);
console.log(typeof num1);

num2 = num2 + 1;
console.log(num2);

// const baslangic
// console.log(baslangic)

// const================

const numOfStudents = 5.5;
console.log(numOfStudents);

console.log(typeof numOfStudents);

const price = "5.5";
console.log(price);
console.log(typeof price);

//! datatypes.js:20 Uncaught TypeError: Assignment to constant variable.
// price = price + 1000
// price++

//! Değişken tanımlama keywordu kullanılmasa bile JS derleyicisi yeni gelen değişkeni otomatik olarak tanımlar.
//? Ancak bu tanimlama VAR ile tanimlama gibi olur.
counter = 9;
console.log(counter);

const yazi1 = "bes";
const yazi2 = 10;

//? concatination (string ekleme)
const sonuc = yazi1 + yazi2;
console.log(sonuc);

let sayac;
sayac = 5;
let kisi = 7;

console.log("SAYAC:", +sayac + " KISI=" + kisi);

sayac += 5;
console.log(sayac, typeof sayac);

sayac = true;
console.log(sayac, typeof sayac);

let myNumber;
console.log(myNumber); //undefined

console.log(typeof null);

//? ==================  LET  ========================
// let x = 3
// {
// let x = 2
// console.log(x)
// }
// console.log(x)

let x = 3
{
x = 2
console.log(x)
}
console.log(x)
//? ==================  VAR ==========================
//* VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//* VAR değişkenleri global degiskenler gibidir.
//* LET ve CONST ile tanimlanan degiskenler block-scope 'dur
//* Yani sadece tanimlandigi block (alan) icerisinde gecerlidir.
{var sayi1 = 333
let sayi2 = 4 
{let sayi=444}
}
