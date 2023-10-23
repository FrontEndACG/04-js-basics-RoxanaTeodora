var arrayInput = document.getElementById("array");
var outputParagraph = document.getElementById("output");

function printMin() {
  var array = arrayInput.value;

  arr = [8, 2, 7, 3, 11];
  min = Infinity;
  //am vrut sa initializez maximum cu nr care sa poata fi refolosit in orice cod

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log("minimul este ", min);
      outputParagraph.innerHTML = "minimul este " + min;
    }
  }
}

function printMax() {
  var array = arrayInput.value;

  arr = [8, 2, 7, 3, 11];
  max = arr[0];

  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) max = arr[i];
    {
      console.log("maximul este ", max);
      outputParagraph.innerHTML = "maximul este " + max;
    }
  }
}
