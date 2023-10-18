var nInput = document.getElementById("n");
var outputParagraph = document.getElementById("output");

function printMedie() {
  outputParagraph.innerHTML = "";
  var n = Number(nInput.value);
  var medie = 0;

  for (var i = 1; i <= n; i++) {
    medie = medie + i;
  }

  medie = medie / n;
  console.log(medie);
  outputParagraph.innerHTML = medie;
}

var arr = [10, 20, 30, 40, 50];
var n = 0;

for (var i = 0; i <= arr.length - 1; i++) {
  n = n + arr[i];
}

n = n / arr.length;
console.log(n);
