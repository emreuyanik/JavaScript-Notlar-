// const maas = 70000;
// const izinGunu = 30;
// console.log(`MAAS=${maas} + SIGORTA, IZIN SURESI: ${izinGunu} gün`);

// console.log();

// y = 9;
// console.log(++y); //10 olur
// console.log(y++); //10 olur
// console.log(y); //11 olur
// let age = prompt('Enter your age?', );
// alert("you are ${age} years old");
// let confirmLegal = confirm("Are you older than 17?", )
// alert(confirmLegal);
// console.log("Emre UYANIK");
// console.log("hello");
// let firstName = `John`;
// let lastName = "Doe";
// let myCity = 'Tysons';
// console.log(`I'am ${firstName} ${lastName}. I live in ${myCity}`);
// console.log("I'm " + firstName + " " + lastName + ". I live in " + myCity);
// console.log("I am " + firstName + " " + lastName + ". I live in " + myCity);
// let text = "He said, \"I am a new programmer.\"";
// console.log(text);

// template literal ile bir js expression kullanmak mümkün;
// const name = prompt("pls enter your name:")
// const dob = prompt("enter your day of birth:")
// console.log(`${name} is ${new Date().getFullYear()-dob} years old `);
// console.log(new Date());

// const r = Number(prompt("pls enter radius"))
// const square = (Math.PI*(r**2)).toFixed(3)//vigülden sonra 3 basamak
// console.log(`Square = ${square}`)

// console.log(Math.round(123.6555));
// console.log(Math.ceil(123.26));
// console.log(Math.floor(123.99));
// console.log(Math.trunc(123.99));
// console.log((123.567).toFixed(2)); //tofixed string olarak yapar
// console.log((123.567).toExponential(3));

// console.log(Math.random()); //her sf refresh de yeni bir sayı üretir
// console.log(Math.round(Math.random() * 100));

// let number1 = 55;
// number1 += 1;
// number1++;
// ++number1;
// console.log(number1);
// console.log("number1", number1++);
// console.log({ number1 });

// const number3 = prompt("3 basamaklı sayı gir");
// const birler = number3 % 10;

// console.log(Boolean(0));
// console.log(!0);

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const yearToCheck = 2400; // Change this to the year you want to check

// if (isLeapYear(yearToCheck)) {
//     console.log(`${yearToCheck} is a leap year.`);
// } else {
//     console.log(`${yearToCheck} is not a leap year.`);
// }
// const sayi1 = -23
// if (sayi1>0) {
//     console.log("sayi pozitif");
// } else if (sayi1<0) {
//     console.log("sayi negatif");
// } else {
//     console.log("sayi 0 a eşit");
// }

// const grade =
// let sonuc = ""
// if (grade < 40) {
//     sonuc = "FF"
// } else if (grade > 55) {
//     sonuc = "gectin"
// }
// console.log(sonuc);

//LEAP YEAR CHECKER------------//

// const year = prompt("Enter a year");
// const LeapYear = ""

// if((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)){
// console.log(`${year}, is leap year.`);
// } else {
//     console.log(`${year} is not a leap year`);
// }
// const month = parseInt(6);
// const day = parseInt(30);

//GET SEASON-----------------//

//Enes hoca çözüm

// if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31 || (month === 2 && day>=30 )) {
//   console.log("Lütfen geçerli değerler girin.");
// } else
//   // İlkbahar (Spring)
//   if ((month === 2 && day >= 21 && day <= 31) || (month >= 3 && month <= 5)) {
//     console.log("Mevsim: İlkbahar");
//   }
//   // Yaz (Summer)
//   else if ((month === 6 && day >= 21 && day <= 30) || (month >= 7 && month <= 8) || (month === 9 && day <= 21)) {
//     console.log("Mevsim: Yaz");
//   }
//   // Sonbahar (Fall)
//   else if ((month === 9 && day >= 22 && day <= 30) || (month >= 10 && month <= 11) || (month === 12 && day <= 20)) {
//     console.log("Mevsim: Sonbahar");
//   }
//   // Kış (Winter)
//   else {
//     console.log("Mevsim: Kış");
//   }
// // }

//Benim Çözüm

// const month = Number(prompt("Enter a month(1-12)"));
// const day = +prompt("Enter a day(1-31)");
// if (
//   (month < 1 || month > 12) ||
//   (day < 1 || day > 31) ||
//   (month === 2 && day > 29)
// ) {
//   console.log("Please enter valid values");
// } else if (
//   (month >= 3 && month <= 5) || (month === 2 && day >= 20 && day <= 29)
// ) {
//   console.log("season: spring");
// } else if ((month >= 6 && month <= 8) || (month === 9 && day <= 20)) {
//   console.log("season: summer");
// } else if ((month >= 9 && month <= 11) || (month === 12 && day <= 20)) {
//   console.log("season: fall");
// } else {
//   console.log("season: winter");
// }

// const age = 2;
// let result;
// if (age >= 18) {
//       result = "You are legal.";
// } else {
//       result = "You are not legal yet.";
// }
// console.log(result);

// Same code with ternary statement
// const age = 15;
// let result=
//     (age >= 18) ? "You are legal." : "You are not legal yet.";
// console.log(result);

// Same code with nested ternary
// let a = -15;
// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(result);

// const first = null;
// const second = 0;
// const third = 0;
// let result = first && second && third;
// console.log(result);
// const userLoggedIn = true;
// userLoggedIn && console.log('Welcome');

// const first = 0; // play with values
// const second = 20;
// const third = 30;
// let result = first || second || third;
// console.log(result);

// let a = "3";
// switch (a) {
//   case "3":
//     a = 33;
//     break;
//   case 2:
//     a = 'two';
//     break;
//   case 3:
//     a = 'three';
//     break;
//   default:
//     a = 'not found';
//     break;
// }
// console.log(`The value is ${a}`);

// const sayi1 = Number(prompt("Birinci sayıyı girin:"));
// const sayi2 = Number(prompt("İkinci sayıyı girin:"));
// const sayi3 = Number(prompt("Üçüncü sayıyı girin:"));

// let enBuyuk = sayi1;

// if (sayi2 > enBuyuk) {
//   enBuyuk = sayi2;
// }

// if (sayi3 > enBuyuk) {
//   enBuyuk = sayi3;
// }

// console.log(`En büyük sayı: ${enBuyuk}`);

// const not = 50

// const result = not >= 50 ? "Geçti" : "Kaldı"
// console.log(result);

// let gecenOgrenciSayisi = 0
// let kalanOgrenciSayisi = 0

// not >= 50 ? (gecenOgrenciSayisi = gecenOgrenciSayisi + 1) : kalanOgrenciSayisi++

// console.log({kalanOgrenciSayisi});
// console.log({gecenOgrenciSayisi});

// Başarı Harfi bulma

// let a = Number(prompt("Notunuzu giriniz:"));
// switch (true) {
//   case a >= 0 && a <= 25:
//     a = "FF";

//     break;
//   case a > 25 && a <= 45:
//     a = "DD";

//     break;
//   case a > 45 && a <= 65:
//     a = "CC";

//     break;
//   case a > 65 && a <= 75:
//     a = "BB";

//     break;
//   case a > 75 && a <= 90:
//     a = "BA";

//     break;
//   case a > 90 && a <= 100:
//     a = "AA";

//     break;
//   default:
//     alert("0-100 arasında sayı giriniz");
//     break;
// }

// alert(`notunuz: ${a}`);

// for (let i = 1 ; i<10 ; i++){
//   console.log(i);
// }

// for (let i = 10 ; i >= 0; i--){
//   console.log(i);
// }

// const n = +prompt("kac adet sayi uretmek istersin?")

// for (let i=1; i<=n; i++){

//   const randomSayi = Math.random(Math.random()*100)
//   console.log(`${i}. rasgele sayi : ${randomSayi}`);
// }

// const n1 = 10
// const n2 = 20

// let toplam = 0
// for (let j = n1; j <= n2; j++) {
//   toplam +=j
// }
// console.log(toplam);

// let n1 = 5
// let n2 = 15
// let toplam = 0

// for (n1; n1 <= n2; n1++) {
//   toplam += n1;
// }
//  console.log(toplam);

const x = 5;
const y = 10;
if ((x + y) % x && y < 15) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}


//*******************Cinsiyete Göre Selamlama******//

// function hosgeldinizMesaji(isim, cinsiyet) {
//   if (cinsiyet === "Bay") {
//     return "Hoşgeldiniz " + isim + " Bey";
//   } else if (cinsiyet === "Hanım") {
//     return "Hoşgeldiniz " + isim + " Hanım";
//   } else {
//     return "Geçerli bir cinsiyet girişi yapmadınız.";
//   }
// }

// let isim = prompt("Adınızı girin: ");
// let cinsiyet = prompt("Cinsiyetinizi girin (Bay veya Hanım): ");

// let mesaj = hosgeldinizMesaji(isim, cinsiyet);
// console.log(mesaj);


