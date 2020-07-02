Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

//1) Have a variable to find the sum of the array to find the missing number
//2) Make the variable of sum equal the length of the sums of the indeces
//3) Have a second variable to find the actually sum of the current array that we are using
//4) loop through the array to add up the sum of the current array
//5) Also add up the sum to find the total sum
//6) subtract the missing sum to the actual sum 

var missingNumber = function(nums) {
    let sumIfNoneMissing = nums.length;
    let actualSum = 0;

    for(let i = 0; i < nums.length; i++){
        sumIfNoneMissing += i;
        actualSum += nums[i];
    }

    return sumIfNoneMissing - actualSum
};
