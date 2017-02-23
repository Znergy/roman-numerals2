/**** First Test Case ****/
// we are getting 1-5 to console log

var number = 4;

if(number === 1) {
	console.log("I");
} else if (number === 2) {
	console.log("II");
} else if (number === 3) {
	console.log("III");
} else if (number === 4) {
	console.log("IV");
} else if (number === 5) {
  console.log("V");
}

// using a for loop to do 1-5
var number = 5;
var string = "";
var finalString = "";
var sliced = "";

for(i=0; i<=number; i++) {
	if(i >= 0 && i < 3) {
  	finalString = finalString + string + "I";
    console.log("Final String, in 0-3 range: " + finalString);
  } else if (i === 4) {
  	sliced = finalString.slice(0, i-3); // III = I (i-3)
  	console.log("Sliced, at 4: " + sliced);
  } else if (i === 5) {
  	console.log("V");
  }
}
