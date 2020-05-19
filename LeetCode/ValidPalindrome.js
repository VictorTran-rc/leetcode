//Question
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

let isPalindrome = function(s) {
  let pointerOne = 0;
  let pointerTwo = s.length - 1;

  while (pointerOne < pointerTwo) {
    while (!isValidCharacter(s.charAt(pointerOne))) {
      pointerOne++;
    }

    while(!isValidCharacter(s.charAt(pointerTwo))) {
      pointerTwo--;
    }

    if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
      return false;

    }

    pointerOne++;
    pointerTwo--;
  }

  return true;
};

let isValidCharacter = function(char) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return alphabet.indexOf(char.toLowerCase()) > -1;
};
