// varianta 1 bazata pe exemplu
for (var i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + 7 * i);
}

// varianta 2
// var numberInput = document.getElementById("number");
// var outputParagraph = document.getElementById("output");

// function results() {
//   var n = Number(numberInput.value);
//   // pentru a face un for pentru a itera prin el
//   var output = "";

//   //line = string gol
//   for (var i = 1; i <= n; i++) {
//     output = output + ("7 x " + i + " = " + 7 * i);
//     output = output + "<br>";

//     // output = output + "<br>";
//     //br deoare output este innerhtml
//   }
//   console.log(output);
//   outputParagraph.innerHTML = output;
// }

// varianta 3 in care se poate selecta nr de multiplicat si nr de multiplicari

var numberOfInput = document.getElementById("numberOf");
var numberInput = document.getElementById("number");
var outputParagraph = document.getElementById("output");
function results() {
  var n = Number(numberInput.value);
  var numberOf = Number(numberOfInput.value);
  // pentru a face un for pentru a itera prin el
  var output = "";

  //line = string gol
  for (var i = 1; i <= n; i++) {
    output = output + numberOf + " x " + i + " = " + numberOf * i;
    output = output + "<br>";

    // output = output + "<br>";
    //br deoare output este innerhtml
  }
  console.log(output);
  outputParagraph.innerHTML = output;
}
