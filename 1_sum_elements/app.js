var nInput = document.getElementById("n");
var outputParagraph = document.getElementById("output");

function printSum() {
  outputParagraph.innerHTML = "";
  var n = Number(nInput.value);
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
  outputParagraph.innerHTML = sum;
}

var arr = [1, 2, 3, 4, 5];
var n = 0;

for (var i = 0; i <= arr.length - 1; i++) {
  n = n + arr[i];
}
console.log(n);
