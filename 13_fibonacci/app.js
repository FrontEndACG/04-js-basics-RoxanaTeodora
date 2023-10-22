//varianta 1
var n1 = 0;
var n2 = 1;

function fib(n) {
  for (var i = 1; i <= n; i++) {
    console.log(n1);
    var nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

fib(8);

// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");
// var n1 = 0;
// var n2 = 1;

// function fib(n) {
//   var n = Number(nInput);

//   for (var i = 1; i <= n; i++) {
//     outputParagraph.innerHTML = ''+ n2;
//     var nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }

//varianta 2
// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");

// function fib(n) {
//   var n1 = 0;
//   var n2 = 1;
//   for (var i = 1; i <= n; i++) {
//     console.log(n1);
//     var nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//     outputParagraph.innerHTML = fib(n);
//   }
// }

// var nInput = document.getElementById("n");
// var outputParagraph = document.getElementById("output");

// function fib(n) {
//   var n = Number(nInput);
//   var n1 = 0;
//   var n2 = 1;
//   var fibSeries = [];

//   for (var i = 1; i <= n; i++) {
//     n1 = i;
//     console.log(n1);
//     var nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// outputParagraph.innerHTML = n1;
// }
// console.log(fibSeries[i]);
// outputParagraph.innerHTML = fibSeries.join(", ");
// }

// Using Recursion to find the Fibonacci Series.
function recur(num) {
  // when num is equal to 1, it returns 0 and 1
  if (num == 1) {
    return [0, 1];
  } else {
    // it continuously calls the recur function till n-1
    total = recur(num - 1);
    /* push function add previous two terms and returns store the result into the total variable. */
    total.push(total[total.length - 1] + total[total.length - 2]);
    return total;
  }
}
