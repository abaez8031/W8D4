const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? yes or no?`, function (answer) {
    if (answer === "yes") {
      callback(true)
    } else {
      callback(false)
    }
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  let sorted = false;
  while(!sorted) {
    sorted = true;
    for(let i = 0; i < arr.length - 1; i++) {
      if (askIfGreaterThan(arr[i], arr[i + 1] === ""))
    }
  }
}
