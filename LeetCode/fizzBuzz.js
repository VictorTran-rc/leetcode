Write a program that outputs the string representation of numbers from 1 to n.

But
for multiples of three it should output“ Fizz” instead of the number and
for the multiples of five output“ Buzz”.
For numbers which are multiples of both three and five output“ FizzBuzz”.

Example:

  n = 15,

  Return: [
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
  ]

logic
1) Set up an empty array to store the values
2) A for loop to go through numbers
3) if the number is a factor of 3 and 5 push "FizzBuzz" to the array
4) if the number is a factor of 3 push  "Fizz" to the array
5) if the number is a factor of 5 push "Buzz" to the array
6) else push the non factor numbers to the array

var fizzBuzz = function(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push('' + i);
    }
  }
  return result;
};
