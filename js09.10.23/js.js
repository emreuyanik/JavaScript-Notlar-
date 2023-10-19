// let n1 = 15
// let n2 = 25
// let toplam = 0

// if (n1 >= n2) {
//     console.log("Lütfen 1. sayiyi daha büyük giriniz")
// } else {
//     for (n1; n1 <= n2; n1++){
//         toplam += n1
//     }
//     console.log(toplam);
// }

//break, continue//

// for (let i = 0; i <= 10; i++) {
//   if (i <= 5) {
//     continue;
//   }
//   if (i === 8) {
//     break;
//   }

//   console.log(i);
// }

//While - Do while////

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// console.log("Dongu bitti");

// ******************************
// let not1 = prompt("lütfen not giriniz")
// while (not1 < 0 || not1 > 100) {
//     console.log("not 0 ve 100 arasında olmalı")
//     not1 = prompt("yeniden giriniz")
// }

// console.log("girdiğiniz not:", not1);

// **********************************************
// let not2 = prompt("lütfen not giriniz")
// for (; not2 < 0 || not2 > 100;) {
//     console.log("not 0 ve 100 arasında olmalı")
//     not1 = prompt("yeniden giriniz")
// }

// console.log("girdiğiniz not:", not2);

// for (ilk kısım sayaç, koşul, sayaç değiştici)

// **********************************************

// let j = 0

// do {
//     console.log(i)
//     j++
// } while (j<10)

// console.log("dongu bitti");
// **********************************************

// Rastgele bir sayı seçme

// const tutulanSayi = Math.floor(Math.random() * 101); // 0 ile 100 arasında bir sayı
// console.log(tutulanSayi);//pc nin tuttuğu sayiyi gösteriyor..
// let hak = 5; // Kullanıcının tahmin hakkı

// while (hak > 0) {
//     const tahmin = parseInt(prompt(`Kalan hak: ${hak} "0 ile 100 arasında bir sayı tahmin edin:"`));

//     if (isNaN(tahmin) || tahmin < 0 || tahmin > 100) {
//         alert("Geçerli bir sayı giriniz.");
//     } else if (tahmin < tutulanSayi) {
//         alert("Daha büyük bir sayı deneyin.");
//         hak--;
//     } else if (tahmin > tutulanSayi) {
//         alert("Daha küçük bir sayı deneyin.");
//         hak--;
//     } else {
//         alert("Tebrikler, doğru tahmin ettiniz!");
//         break; // Doğru tahmin edildiğinde döngüyü sonlandır
//     }
// }

// if (hak === 0) {
//     alert(`Üzgünüm, hakkınız bitti. Doğru cevap ${tutulanSayi} idi.`);
// }

// **********************************************

// FONKSİYONLAR------------>

// function topla() {
//   let a = 5;
//   let b = 20;
//   let sonuc = a + b;
//   console.log(sonuc);
// }

// topla(5,20)



// function yazdir(lang,
//     name="no name") { 
//     console.log(`${lang} ${name}`);
// }

// yazdir("Ahmet")


// function bol(a,b) {
//     const result = a/b
//     return result

// }

// let sonuc = bol(1005, 5)
// console.log("sonuc", sonuc);


// function toplama(n1,n2,n3){
//     return n1+n2+n3
// }
// console.log(`sonuc:${3,5,8}`);


// const sayi = Number(prompt("bir sayı girin"))

// function tekVeyaCift(sayi) {
//     return sayi % 2 === 0 ? "cift" : "tek"
// }
// console.log(`${sayi} ${tekVeyaCift(sayi)}dır`);

