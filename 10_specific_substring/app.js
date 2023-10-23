//varianta 1
// var str = "JavaScript is a powerful language";
// var check = "powerful";

// function findSubstring() {
//   if (str.includes(check)) {
//     console.log("The string contains the substring " + check);
//   } else {
//     console.log("The string does not contain the substring " + check);
//   }
// }

//varianta 2
var stringInput = document.getElementById("string");
var substringInput = document.getElementById("substring");
var outputParagraph = document.getElementById("output");

function findSubstring() {
  var str = stringInput.value;
  var substring = substringInput.value;
  if (str.includes(substring)) {
    console.log("The string contains the substring " + substring);
    outputParagraph.innerHTML =
      "The string contains the substring " + substring;
  } else {
    console.log("The string does not contain the substring " + substring);
    outputParagraph.innerHTML =
      "The string does not contain the substring " + substring;
  }
}
