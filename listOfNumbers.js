/*
  README:
  Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
  For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const a = [10, 15, 3, 7];
const k = 17;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (a[i] + a[j] === k) {
      console.log(`Result: ${a[i]} + ${a[j]} = ${k}`);
      return true;
    } else {
      console.log(`Invalid: ${a[i]} + ${a[j]} != ${k}`);
    }
  }
}
