Subsets

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
// 1) Store the subsets into an empty array
// 2) create a function that takes in the given array and the new subset I am creating
// 3) Create a helper function that will call itself recursively taking in three arguments. The given array, the subset and i
// 4) Push the numbers into the empty array
// 5) loop through the array to and see if the number is pushed to the subset

var subsets = function(nums) {
    let result = [];
    subset(nums, result);
    return result;
};

function subset(nums, result, i = 0, curr = []) {
    result.push(curr);

for (; i < nums.length; i +=1 ){
    subset(nums, result, i + 1, curr.concat(nums[i]));
    }
}
