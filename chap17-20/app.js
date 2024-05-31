
// Q no 1

// let emptyArray = [[],[],[]];

// Q no 2

// let multiDimentionalArray = [[0,1,2,3,],[1,0,1,2],[2,1,0,1]];
// for(let i=0;i<multiDimentionalArray.length;i++){
//     document.write(`<h1>${multiDimentionalArray[i].join(' ')}</h1>`)
// };

// Q no 3

// let counting=[1,2,3,4,5,6,7,8,9,10];
// for(i=1;i<=counting.length;i++){
//     document.write(`${i}<br/>`);

// }

// Q no 4


// let table = +prompt("Enter a number to show its multiplication table",2);
// let tableLength = +prompt("Enter length multiplication table",15);
// document.write(`<h3>Multiplication Table of ${table} length ${tableLength}<h3/>`)
// for(let i=1; i<=tableLength; i++){
//     document.write(`${table} X ${i} = ${table*i} <br/>`)
// };

// Q no 5

// let fruits = ["apple","banana","mango","orange","strawberry"];

// for(let i=0; i<fruits.length;i++){
//     document.write(`${fruits[i]}<br/>`)
// };
// document.write(`<br/>`)
// for(let j=0; j<fruits.length;j++){
//     document.write(`Element at index ${j} is ${fruits[j]}<br/>`)
// };

// Q no 6

// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write(`<h2>Counting<h2/>`)
// let counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// document.write(counting)

// // // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// counting.reverse()
// document.write(`<br/><h2>Reverse Counting<h2/>`)
// for(let i=5; i<=14; i++){
//     document.write(`${counting[i]},`)
// };

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write(`<br/><h2>Even: <h2/>`);
// for(let i=0; i<=20; i++){
//     if(i%2 == 0){
//         document.write(`${i},`)
//     }
// };

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// document.write(`<br/><h2>Odd: <h2/>`);

// for(let j=0; j<=20; j++){
//     if(j%2 == 1){
//         document.write(`${j},`)
//     }
// };


// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write(`<br/><h2>Series: <h2/>`);
// for(let i=2; i<=20; i++){
//     if(i%2 == 0){
//         document.write(`${i}k,`)
//     }
// };


// Q no 7

// let bakkeryItems = ["cake","apple pie","cookie","chips","patties"];

// let askCustomer = prompt("welcome to abc bakkey.what do you want to order sir/ma'am?");

// if(bakkeryItems.includes(askCustomer)){
//     document.write(`${askCustomer} is available at index ${bakkeryItems.indexOf(askCustomer)} in our bakkey`);
// }
// else{
//     document.write(`we are sorry.${askCustomer} is not available in our bakkery.`)
// };

// Q no 8

// let arrayItems = [24, 53, 78, 91, 12];

// document.write(`<h1>Array items: 24, 53, 78, 91, 12<h1/>The largest number is: ${arrayItems[3]}`)


// Q no 9


// let numbers = [24, 53, 78, 91, 12];
// document.write(`<h1>Array items: 24, 53, 78, 91, 12<h1/>The smallest number is: ${numbers[4]}`)

// Q no 10


for(i=5; i<=100; i++){
    if(i%5 == 0){
        document.write(`${i},`)
    }
}






















