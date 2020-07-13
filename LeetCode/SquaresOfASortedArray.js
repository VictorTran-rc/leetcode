Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]


Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

1) Set an empty array for the new numbers to be placed
2) loop through the array and push the square value of the element
3) sort the array

var solutionSquares = function(A) {
  let a = []
  for (let = i; i < A.length; i++){
    a.push(A[i] * A[i])
  }
  a.sort((a,b) => a-b)
  return a
};
