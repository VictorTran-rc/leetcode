Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


Constraints:

1 <= nums.length <= 3 * 10^4
0 <= nums[i][j] <= 10^5

ex1) is true because at index 0 we can jump to 1, 1 , then 4 to the last index
ex2) is false because at index 0 we can jump to 0 then can't move from there

1) Since I know that the last index is what I am trying to find. Move to the left as much as possible to find an index that will get us to the right spot to reach the last index
2) Check the first index is greater or equal to the target index (length of the array)
3) Start from the target index and move to the left
4) Check each index to the left if it can reach the target index


var canJump = function(nums) {
    let lastIndex = nums.length -1

    for(let i = nums.length - 1; i >= 0; i--){
        if(i + nums[i] >= lastIndex){
              lastIndex = i;
        }
    }
    return lastIndex === 0;
};
