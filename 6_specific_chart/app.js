// variata 1
// var string = "Hello World";
// uppercase = 0;

// function uppercaseLetters() {
//   for (var i = 0; i <= string.length - 1; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       uppercase++;
//     }
//   }
//   console.log("Number of uppercase letters: ", uppercase);
// }

//varianta 2
var stringInput = document.getElementById("string");
var elementInput = document.getElementById("element");
var outputParagraph = document.getElementById("output");

function uppercaseLetters() {
  var uppercase = 0;
  var newStr = 0;
  var string = stringInput.value;
  var newStr = string.split(/\s+/).join("");
  for (var i = 0; i <= newStr.length - 1; i++) {
    if (newStr[i] === newStr[i].toUpperCase()) {
      uppercase++;
    }
  }
  console.log("Number of uppercase letters: ", uppercase);
  outputParagraph.innerHTML = "Number of uppercase letters: " + uppercase;
}

// codul o sa afișeze 3, nu 2 deoarece spatiile albe sunt considerate caractere albe ca valuare
// am adaugat o noua variabila newSt care elimina spatiile albe
