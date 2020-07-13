Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters.
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. 
In this scenario, how would you change your code?

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

//1) check if s is an empty string
//2) have two pointers to check the array
//3) while loop to check s and t variables
//4) another while loop to check if s === t 
//5) 
//6)

let isSubsequence = function(s, t) {
    if (s.length === 0) {
        return true;
    }

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < s.length && pointer2 < t.length) {
        if (t.charAt(pointer2) === s.charAt(pointer1)) {
            pointer1++;
        }
        pointer2++;
    }

    return pointer1 === s.length;
};
