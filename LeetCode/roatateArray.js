Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

let rotate = function(nums, k) {
  k = k % nums.length;

  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
};

// reverse method
// 1) set k to divide the value of k to the length of the array 
// 2) reverse the array 
// 3) reverse the first k element in the array 
// 4) reverse the rest of the numbers 
// 5) create a reverse function that will take in the whole array from start to end
// 6) a while loop to from start to end
// 7) have a variable to hold the first element 
// 8) replace the first element with the last element 
// 9) replace the last element with the first element 
// 10) incremedemnt start by 1 
// 11) decrement end by 1 


var rotate = function(nums, k) {
    k = k % nums.length; 
    
    reverse(nums, 0, nums.length -1);
    reverse(nums, k, nums.length - 1); 
    reverse(nums, 0, k-1 )
};

let reverse = function(nums, start, end){
    while(start < end) {
        let temp = nums[start]; 
        nums[start] = nums[end];
        nums[end] = temp; 
        start++;
        end--;       
    }
};
