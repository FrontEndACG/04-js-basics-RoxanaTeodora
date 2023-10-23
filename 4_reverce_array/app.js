// varianta 1
var arr = [1, 2, 3, 4, 5];
var revArr = [];

for (var i = arr.length - 1; i >= 0; i--) {
  revArr.push(arr[i]);
}

console.log(revArr);

//varianta in lucru
// var arrInput = document.getElementById("arr");
// var outputParagraph = document.getElementById("output");

// function printReversed() {
//   var arr = arrInput.value;
//   var revArr = [];

//   for (var i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i - 1]);
//   }

//   outputParagraph.innerHTML = "Reversed array: " + arr;
// }

function printReversed() {
  var arrInput = document.getElementById("arr");
  var outputParagraph = document.getElementById("output");
  var arr = arrInput.value;
  var myArray = arr.split(",");
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].trim();
  }

  var revArr = [];

  for (var i = myArray.length - 1; i >= 0; i--) {
    revArr.push(myArray[i]);
  }

  outputParagraph.innerHTML = "Reversed Array: " + revArr.join(", ");
}
