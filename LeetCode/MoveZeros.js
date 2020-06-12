Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations

1) set an anchor to hold the position of 0
2) set curr to hold the position of the current numbers
3) run a while loop through the array
4) if nums current number does not equal
5) the pointer moves through the array and finds the number that isn't 0 and switching it in the back

a) let temp number = to num current
b) num curr = num anchor
c) num anchor = temp


let moveZeroes = function(nums) {
   let anchor = 0;
    let curr = 0;
    while (curr < nums.length) {
        if (nums[curr] !== 0) {
            let temp = nums[curr];
            nums[curr] = nums[anchor];
            nums[anchor] = temp;
            anchor++;
        }
        curr++;
    }
};
