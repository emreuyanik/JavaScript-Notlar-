// // 1-18 yaşından büyüklerin oy kullanacağı program

// let yas = prompt("yasinizi giriniz");
// let vatandas = confirm("TC vatandaşı mısınız?");
// console.log(vatandas);

// // if (yas >= 18 && vatandas) {
// //   console.log(`yasiniz ${yas} Türkiye vatandaşısınız, oy kullanabilirsiniz`);
// // } else {
// //   console.log(`yasiniz ${yas} oy kullanamazsınız`);
// // }

// // ternary

// yas >= 18 && vatandas

//     ? console.log(`yasiniz ${yas} Türkiye vatandaşısınız, oy kullanabilirsiniz`)
//     : console.log(`yasiniz ${yas} oy kullanamazsınız`)
    
// **********************************

// celcius u fahrenheite dönüştüren program declaration yöntemi

// function calFah(celcius){
//     const hesap = (celcius*9)/5+32
//     return hesap
// }
// console.log(calFah(30));

// // celcius u fahrenheite dönüştüren program arrow fn yöntemi

const calFah = (celcius) => (celcius*9)/5+32;
console.log(calFah(35));

// **********************************

// string bir ifadenin tersini bulan function

// const str = "hello world"

// const reverseString = (str) => {
//     let newStr = ""
//     for(let i = str.length-1; i >= 0; i--){
//        newStr += str[i]
//     }
//     return newStr
// }
// console.log(reverseString(str));

// Bir ifade palindrome mu değil mi?

const str = "selles"

const isPalindrome = (str) => {
    let newStr = ""
    for(let i = str.length-1; i >= 0; i--){
       newStr += str[i]
    }
    return newStr === str;
}
console.log(isPalindrome(str));

const vowels = "aeıioöuü";

const findVowels = (str)