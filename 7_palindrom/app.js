// Varianta 1
// var str = "racecar";

// for (var i = 0; i <= str.length - 1; i++) {
//   for (var j = str.length; j >= 0; j--) {
//     if (i === j) {
//       console.log("The string ", str, " is a palindrome.");
//     }
//   }
// }

var strInput = document.getElementById("string");
var outputParagraph = document.getElementById("output");

function checkPalindrome() {
  var str = strInput.value;
  //   console.log(str);

  var i = 0;
  var j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      console.log("nu e palindrom");
      outputParagraph.innerHTML = str + "nu e palindrom";
      return;
    }
    i++;
    j--;
  }
  console.log("e palindrom");
  outputParagraph.innerHTML = str + "e palindrom";
}
