//Varianta 1
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (var i = 2; i  <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

//Varianta 2

function isPrime(n) {
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

console.log(isPrime(3));

function findPrimesUpTo(n) {
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
var n = 20;
findPrimesUpTo(n);

// Varianta 3 output daca este prim sau nu
// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");

// function isPrime() {
//   var n = Number(nInput.value);
//   if (n < 2) {
//     // return false;
//     return (outputParagraph.innerHTML = "false");
//   }

//   for (var i = 2; i < n; i++) {
//     if (n % i === 0) {
//       // return false;
//       return (outputParagraph.innerHTML = "false");
//     }
//   }
//   // return true;
//   return (outputParagraph.innerHTML = "true");
// }

//varianta 4
// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");

// function isPrime() {
//   var n = Number(nInput.value);
//   for (var i = 2; i < n; i++) {
//     if (n % i === 0) {
//       // return false;
//       return (outputParagraph.innerHTML = "false");
//     } else {
//       // return (outputParagraph.innerHTML = "true");;
//       return (outputParagraph.innerHTML += i + " ");
//     }
//   }
// }

// console.log(isPrime(3));

// function findPrimesUpTo(n) {
//   for (var i = 2; i <= n; i++) {
//     console.log(i);
//     if (isPrime(i) === true) {
//       outputParagraph.innerHTML += i + " ";
//     }
//   }
// }
// nInput.value = 20;
// findPrimesUpTo();

// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
