//varianta 1
// var arr = [10, 20, 30, 40, 50];
// element = 30;

// function findSpecific() {
//   for (var i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === element) {
//       console.log("Element found at position ", i);
//     } else {
//       console.log("Element not found");
//     }
//   }
// }

// varianta 2
var arrayInput = document.getElementById("array");
var elementInput = document.getElementById("element");
var outputParagraph = document.getElementById("output");

function findSpecific() {
  var arr = arrayInput.value;
  var elementSpecific = elementInput.value;

  // Verificăm dacă elementul este prezent în array
  if (arr.includes(elementSpecific)) {
    var index = arr.indexOf(elementSpecific); // Obținem indexul elementului

    console.log("Element found at position ", index);
    outputParagraph.innerHTML = "Element found at position " + index;
  } else {
    console.log("Element not found");
    outputParagraph.innerHTML = "Element not found";
  }
}
