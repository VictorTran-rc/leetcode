Find Common Characters
hi
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

1)
2)
3)
4)
5)

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter


var commonChars = function(A) {
  return A.reduce((acc, next) => {
    var array = [];
    for (var i = 0; i < next.length; i ++) {
      var key = next[i];
      var index = acc.indexOf(key);
      if (index > -1) {
        acc.splice(index, 1)
        array.push(key)
      }
    }
    return array
  }, A[0].split(''));
};
