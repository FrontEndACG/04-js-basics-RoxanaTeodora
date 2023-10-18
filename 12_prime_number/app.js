//Varianta 1
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (var i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

//Varianta 2
var nInput = document.getElementById("n");
var outputParagraph = document.getElementById("output");

function isPrime(n) {
  var n = Number(nInput.value);
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(3));

function findPrimesUpTo(n) {
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
      outputParagraph.innerHTML += i + " ";
    }
  }
}

// nInput.value = 20;
// findPrimesUpTo();
