
// Q no 1
// var cityName = prompt("Enter the city name:");

// Checking if the city is Karachi
// if (cityName == "karachi") {
//     console.log("Welcome to the city of lights");
// } else {
//     console.log("Welcome");
// }

// Q no 2
// var gender = prompt("Enter your gender:");


// if (gender == "Male") {
//     console.log("Good morning sir");
// } else {
//     console.log("Good morning ma'am");
// }


//Q no 3

// var trafficLight = prompt("Enter Traffic signal color (red/yellow/green)")

//if (trafficLight.toLowerCase()=== "red"){
//alert("Must stop");
//}
//else if (trafficLight.toLowerCase()=== "yellow"){
//alert("Ready to move");
//}
//else if (trafficLight.toLowerCase()=== "green"){
//alert("Move now");
//}


// Q no 4
// var  currentFuel = prompt("Enter current fuel:");


// if (currentFuel == "0.25litres") {
//     console.log("Please refill the fuel in your car");
// } else {
//     console.log("fuel is average");
// }


// Q no 5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//   var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
//  }
//  if (c === 13){
//  alert("condition 2 is true");
//  }
//  if (++c < 14){
//  alert("condition 3 is true");
//  }
//  if(c === 14){
//  alert("condition 4 is true");}

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }

// if (false){
//     alert("False");
//     }

//  if("car" < "cat"){
//     alert("car is smaller than cat");

//     }


//  Q no 6

//var totalMarks = 300; // assume total marks is 300
//var marksObtained = parseInt(prompt("Enter marks obtained in subject 1: ")) + 
                 //    parseInt(prompt("Enter marks obtained in subject 2: ")) + 
                   //  parseInt(prompt("Enter marks obtained in subject 3: "));

//var percentage = (marksObtained / totalMarks) * 100;

//if (percentage >= 80) {
  //var grade = "A-one";
  //var remarks = "Excellent";
//} else if (percentage >= 70) {
  //var grade = "A";
  //var remarks = "Good";
//} else if (percentage >= 60) {
  //var grade = "B";
  //var remarks = "You need to improve";
//} else {
  //var grade = "Fail";
  //var remarks = "Sorry";
//}

//document.write("Marks Sheet<br>");
//document.write("Total marks: " + totalMarks + "<br>");
//document.write("Marks obtained: " + marksObtained + "<br>");
//document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//document.write("Grade: " + grade + "<br>");
//document.write("Remarks: " + remarks + "<br>");


    // Qno 7

    // Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
// var userGuess = (prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// } 


// Q no 8

// Prompting user to enter a number
// var number = prompt("Enter a number:");

// Checking if the number is divisible by 3
// if (number % 3 === 0) {
//     console.log(number + " is divisible by 3.");
// } else {
//     console.log(number + " is not divisible by 3.");
// }

// Qno 9
// var num = prompt("Enter a number ");


// if(num === 0) {
//     console.log(num + " is a even number");
// } else {
//     console.log(num + "  is a odd number");
// }



// Qno 10 

// var temperature = 50;
// if(temperature>40){
// console.log("It is too hot outside.");
// }
// if(temperature>30){
//     console.log("The Weather today is Normal.");
//     }
//     if(temperature>20){
//         console.log("Today’s Weather is cool.");
//         }
//         if(temperature>10){
//             console.log("OMG! Today’s weather is so Cool.");
//             }
            
// Q no 11


var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  var result = parseFloat(num1) + parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "-") {
  var result = parseFloat(num1) - parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "*") {
  var result = parseFloat(num1) * parseFloat(num2);
  alert("The result is: " + result);
} else if (operation === "/") {
  if (num2!== "0") {
    var result = parseFloat(num1) / parseFloat(num2);
    alert("The result is: " + result);
  } else {
    alert("Error: Division by zero is not allowed.");
  }
} else if (operation === "%") {
  if (num2!== "0") {
    var result = parseFloat(num1) % parseFloat(num2);
    alert("The result is: " + result);
  } else {
    alert("Error: Modulus by zero is not allowed.");
  }
} else {
  alert("Error: Invalid operation. Please enter +, -, *, /, or %.");
}