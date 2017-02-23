/**** First Test Case ****/
// we are getting 1-5 to console log
//
// var number = 4;
//
// if(number === 1) {
// 	console.log("I");
// } else if (number === 2) {
// 	console.log("II");
// } else if (number === 3) {
// 	console.log("III");
// } else if (number === 4) {
// 	console.log("IV");
// } else if (number === 5) {
//   console.log("V");
// }

// using a for loop to do 1-5
// var number = 5;
// var string = "";
// var finalString = "";
// var sliced = "";
//
// for(i=0; i<=number; i++) {
// 	if(i >= 0 && i < 3) {
//   	finalString = finalString + string + "I";
//     console.log("Final String, in 0-3 range: " + finalString);
//   } else if (i === 4) {
//   	sliced = finalString.slice(0, i-3); // III = I (i-3)
//   	console.log("Sliced, at 4: " + sliced);
//   } else if (i === 5) {
//   	console.log("V");
//   }
// }

// SECOND ATTMEPT AT ROMAN NUMERALS
var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1,000;

var userInput = 25; // XXV


if (userInput === 1 && userInput < 5) {
	console.log(I + number of times)
}

var numArray = [1, 5, 10, 50, 100, 500, 1000];
var letterArray = [I, V, X, L, C, D, M];

// first..
input = array
array.split input into an array of individual numbers
if array,length === 4 numbers, first digit is a thousand
	then hundreds, then tens etc
if array,length === 3 digits, first digit is a hundred
	then ten, then one;
if array,length === 2 digits, first digit is tens
	then ones
if array,length === 1 digit, first digit is tens
	then NOTHING

userInput = []
userInput = [1000]

userInput.split("");
	this.forEach{
  	if userInput.length === 3{
    	userInput[0] === M ====
    }
  }









  var number = 5;
  var array = number.split("");
  console.log("Array " + array); // [5]
  if (array.length === 0) {
  	if(number === 5) {
    	console.log("V");
    }
  }
