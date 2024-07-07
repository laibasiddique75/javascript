// Q no 1

// function dateAndTime(){
// let date = new Date();
// console.log(date);
// }
// dateAndTime();

// Q no 2

// let greet = prompt("Enter your first and last name");
// function greetUser(){
//     console.log(`Hii ${greet} welcome!`);
// }
// greetUser();

// Q no 3

// function addTwoNumbers() {
  
//     let num1 = parseFloat(prompt("Enter the first number:"));

//     let num2 = parseFloat(prompt("Enter the second number:"));

//     let sum = num1 + num2;

//     document.write( `The sum of ${num1} and ${num2} is ${sum}.`);
// }

// addTwoNumbers();


// Q no 4



// function calculate(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero";
//             }
//             break;
//         default:
//             result = "Error: Invalid operator";
//     }
//     return result;
// }


// function performOperation() {
  
//     let num1 = parseFloat(prompt("Enter the first number:"));

//     let num2 = parseFloat(prompt("Enter the second number:"));

//     let operator = prompt("Enter the operator (+, -, *, /):");

//     let result = calculate(num1, num2, operator);
   

//     document.write(`The result of ${num1} ${operator} ${num2} is ${result}.`);
// }
// performOperation();


// Q no 5
// function square(number) {
//     return number * number;
// }
// function squareNumber() {
  
//     let num = parseFloat(prompt("Enter a number to square:"));

//     let squaredNum = square(num);

// document.write( `The square of ${num} is ${squaredNum}.`);
// }
// squareNumber();

// Q no 6

// function factorial(n) {
//     if (n < 0) {
//         return "Error: Factorial of a negative number is undefined.";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// function computeFactorial() {
//     // Prompt the user to enter a number
//     const num = parseInt(prompt("Enter a number to compute its factorial:"));

//     // Check if the input is a valid number
  

//     // Calculate the factorial of the number
//     const fact = factorial(num);

//     // Display the result in the browser
//     document.getElementById('result').innerText = `The factorial of ${num} is ${fact}.`;
// }


// Q no 7


// function displayCounting() {
   
//     let startNumber = parseInt(prompt("Enter the start number:"));

//     let endNumber = parseInt(prompt("Enter the end number:"));

//     // Check if the inputs are valid numbers
//     if (isNaN(startNumber) || isNaN(endNumber)) {
//         alert("Please enter valid numbers.");
//         return;
//     }


//     let countingArray = [];

//     if (startNumber <= endNumber) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             countingArray.push(i);
//         }
//     } else {
//         for (let i = startNumber; i >= endNumber; i--) {
//             countingArray.push(i);
//         }
//     }

//     document.write( countingArray.join(', '));
// }


// displayCounting();

// Q no 10
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// function checkPalindrome() {
   
//     let inputStr = prompt("Enter a string to check if it's a palindrome:");
// let  result = isPalindrome(inputStr);

//     if (result) {document.write( `"${inputStr}" is a palindrome word.`);
//     } else {document.write( `"${inputStr}" is not a palindrome word.`);
//     }
// }
// checkPalindrome();

// Q no 11















