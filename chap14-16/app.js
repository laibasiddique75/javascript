// Q no 1
var studentNames = [];

// Q no 2
  var studentNames = [];

// Q no 3
let stringArray = ["laiba","rida","bisma"];
// Q no 4
let numberArray = [1,2,3];
// Q no 5
let booleanArray = [true,false];
// Q no 6
let mixedArray = ["laiba",21,true];
// Q no 7
// let qualifications =["1) SSC"," </br> 2) HSC", " </br> 3) BCS" ," </br> 4) BS","</br> 5) BCOM"," </br> 6) MS", "</br> 7) M. Phil", "</br> 8) PhD"];
// document.write(`${qualifications}`)
// Q no 8

//   let studentName = ["laiba", "bisma", "kareena"];
//  let studentScore = [320, 230, 480];
// let totalMarks = 500;
// document.write(
//   `Score of ${studentName[0]} is ${studentScore[0]}. percentage: ${
//      (studentScore[0] / totalMarks) * 100   }% </br>Score of ${studentName[1]} is ${studentScore[1]}. percentage: ${     (studentScore[1] / totalMarks) * 100   }% </br>Score of ${studentName[2]} is ${studentScore[2]}. percentage: ${
//     (studentScore[2] / totalMarks) * 100
//   }% </br>` );


// Q no 9


let colorNames =["red","green","blue"];
document.write(`${colorNames}<br/>`)

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let askUserColor = prompt["what color you want add in the beggining of an array."];
colorNames.unshift(askUserColor)
document.write(`${colorNames}<br/>`)

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

let askUser2 = prompt("What color you want to add to the end of the array");
colorNames.push(askUser2);
document.write(`${colorNames}<br/>`);

// c. Add two more color to the beginning of the array.Display the updated array in your browser.

colorNames.unshift("yellow","white")
document.write(`${colorNames}</br>`)

// d. Delete the first color in the array. Display the updatedarray in your browser.

colorNames.shift();
document.write(`${colorNames}</br>`)

// e. Delete the last color in the array. Display the updatedarray in your browser.

colorNames.pop();
document.write(`${colorNames}</br>`)

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.

let colorIndex = +prompt("at which index you want a color");
let colorName = prompt("which clor you want to add");
colorNames[colorIndex] =colorName
document.write(colorNames)

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index.
// Display the updated array in your browser.

let indexOfColor = +prompt("At which index you want to delete a color");
let numberOfColors = +prompt("How many colors you want to delete");
colorNames.splice(indexOfColor,numberOfColors)
document.write(colorNames);




   // Q no 10
// let studentScores = [320, 230, 480,120];
// studentScores.sort((a, b) => a - b);

//  document.write("Scores of Students: 320, 230, 480,120");
//  document.write("</br> Ordered Scores of Students: 120,230,320,480");



// Q no 11

// let citiesNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write(`Cities List: </br> ${citiesNames}<br/>`);
// let selectedCities = citiesNames.slice(2,4);
// document.write(`Selected cities: </br> ${selectedCities}`);

// Q no 12

// var arr = ["This","is","my","cat"];
// document.write(`<h2>Array:<h2/>${arr}<br/>`);
// document.write(`<h3>String:<h3/>${arr.join(" ")}<br/>`)

// Qno 13
// let devices = new Array("Keyyboard","Mouse","Printer","Monitor");
// document.write(`<h2> Devices: <h2/> ${devices}<br/>`);
// for(let i of devices){
//     document.write(`<br/>OUT:<br/>${i}<br/>`)
// }

// Q no 14
// let devicesReverse = new Array("Keyboard","Mouse","Printer","Monitor");
// document.write(`<h3>Devices:<h3/> ${devicesReverse}`);
// devicesReverse.reverse();

// for(let i of devicesReverse){
//     document.write(`<br/>OUT:<br/>${i}`)
// };

// Q no 15


let mobileBrand = ["Apple", "Samsung", "Motorla", "Nokia", "Sony", "Haier"];
document.write(`<h1>Phone Manufacture:<h1/>
<select>
<option value="">${mobileBrand[0]}</option>
<option value="">${mobileBrand[1]}</option>
<option value="">${mobileBrand[2]}</option>
<option value="">${mobileBrand[3]}</option>
<option value="">${mobileBrand[4]}</option>
<option value="">${mobileBrand[5]}</option>
<option value="">${mobileBrand[6]}</option>
</select>
`);








