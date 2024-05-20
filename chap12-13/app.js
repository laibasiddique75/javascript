// Q no 1
function checkCharacterType(char) {
    // Check if the input is a single character
    if (char.length !== 1) {
        return "Input must be a single character.";
    }
    
    // Get the ASCII code of the character
    let asciiCode = char.charCodeAt(0);

    // Check if the character is a number (0-9)
    if (asciiCode >= 48 && asciiCode <= 57) {
        return "The character is a number.";
    }
    // Check if the character is an uppercase letter (A-Z)
    else if (asciiCode >= 65 && asciiCode <= 90) {
        return "The character is an uppercase letter.";
    }
    // Check if the character is a lowercase letter (a-z)
    else if (asciiCode >= 97 && asciiCode <= 122) {
        return "The character is a lowercase letter.";
    }
    // If none of the above, it's not a number or letter
    else {
        return "The character is neither a number nor a letter.";
    }
}

// Test the function
let testChar = 'A';  // Change this value to test different characters
console.log(checkCharacterType(testChar));  // Output: The character is an uppercase letter.

// Q no 2
function compareIntegers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is larger than ${num2}`;
    } else if (num2 > num1) {
        return `${num2} is larger than ${num1}`;
    } else {
        return `Both numbers are equal: ${num1}`;
    }
}

// Test the function with example inputs
let integer1 = 5; // Change this value to test different numbers
let integer2 = 10; // Change this value to test different numbers

console.log(compareIntegers(integer1, integer2));  // Output: 10 is larger than 5


// Q no 3
// Function to determine if the number is positive, negative, or zero
function checkNumber() {
    // Prompt the user to enter a number
    let userInput = prompt("Please enter a number:");
  
    // Convert the input to a number
    let number = parseFloat(userInput);
  
    // Check if the input is a valid number
    if (isNaN(number)) {
      console.log("The input is not a valid number.");
    } else {
      // Determine if the number is positive, negative, or zero
      if (number > 0) {
        console.log("The number is positive.");
      } else if (number < 0) {
        console.log("The number is negative.");
      } else {
        console.log("The number is zero.");
      }
    }
  }
  
  // Call the function to execute the check
  checkNumber();

// Qno 4
let userInput = prompt("Please enter a character:");
let result = isVowel(userInput);

// Function to check if the input character is a vowel
function isVowel(char) {
    // Define a string of vowels (both lowercase and uppercase)
    let vowels = 'aeiouAEIOU';
  
    // Check if the input character is a single character
    if (char.length !== 1) {
      console.log("Please enter a single character.");
      return false;
    }
  
    // Check if the character is a vowel
    if (vowels.indexOf(char) !== -1) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(result);



// Q no 5
// Store the correct password in a variable
var correctPassword = "mySecretPassword";

// Function to validate the entered password
function validatePassword() {
  // Prompt the user to enter a password
  let userPassword = prompt("Please enter your password:");

  // Check if the password is empty
  if (userPassword === null || userPassword.trim() === "") {
    console.log("Please enter your password.");
  } else {
    // Check if the entered password matches the correct password
    if (userPassword === correctPassword) {
      console.log("Correct! The password you entered matches the original password.");
    } else {
      console.log("Incorrect password.");
    }
  }
}

// Call the function to execute the validation
validatePassword();
 // Q no 6

 var greeting;
 var hour = 13;
 if (hour < 18) {
   greeting = "Good day";
   console.log(greeting);
 } else {
   greeting = "Good evening";
   console.log(greeting);
 }
 
 // Q no 7

 let time = +prompt("Enter time i.e in this format (eg:1900 = 7pm)");

 if (time >= 0 && time <1200) {
     alert("Good Morning");
 }
 else if (time >= 1200 && time < 1700) {
     alert("Good Afternoon");
 }
 else if (time >= 1700 && time < 2100) {
     alert("Good Evening");
 }
 else if (time >= 2100 && time <= 2359) {
     alert("Good Night");
 }
 else {
     alert("Please enter time in given format (eg:1900 = 7pm)");
}
 