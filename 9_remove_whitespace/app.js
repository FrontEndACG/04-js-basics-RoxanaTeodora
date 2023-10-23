var str = "Hello   World";
var word = [];
var hello = [];

//varianta 1 bazata pe exemplu
word = str.substring(0, 5);
console.log(word);

hello = str.substring(8, str.length);
console.log(hello);
console.log(word + hello);

//varitanta 3 cod universal care elimna spatiile
var stringInput = document.getElementById("string");
var outputParagraph = document.getElementById("output");

function removeSrt() {
  var str = stringInput.value;
  var newStr = str.split(/\s+/).join("");

  console.log(newStr);
  outputParagraph.innerHTML = newStr;
}
