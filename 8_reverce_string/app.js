var strInput = document.getElementById("string");
var outputParagraph = document.getElementById("output");

function revString() {
  var str = strInput.value;
  var revStr = [];
  for (var i = str.length - 1; i >= 0; i--) {
    revStr.push(str[i]);
  }
  revStr = revStr.join("");

  console.log(revStr);
  outputParagraph.innerHTML = revStr;
}
