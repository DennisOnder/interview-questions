// Implement a function which takes in a function f and an integer n, and calls f after n milliseconds.

function main(f, n) {
  setTimeout(() => {
    f();
  }, n);
}

main(() => console.log("Hello"), 1000);
