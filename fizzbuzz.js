for (let i = 1; i <= 100; i++) {
  i % 3 == 0
    ? console.log("Fizz")
    : i % 5 == 0
    ? console.log("Buzz")
    : i % 15 == 0
    ? console.log("Fizzbuzz")
    : console.log(i);
}
