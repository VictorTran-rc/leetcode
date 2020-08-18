
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

const isAnagram = function(s, t) {
  if (s.length !== t.length ) {
    return false;
    }
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
};

const isAnagram = function(s, t) {
    return cleanString(s) === cleanString(t)
}


function cleanString(str){
  return str.replace(/[\^w]/g, "").toLowerCase().split('').sort().join('')
 
}
