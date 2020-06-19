Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.

1) be able to delete the numbers in the array that you don't need
2) loop throught the array and find the numbers you don't need
3) Set up a while loop to go throught the array after the delete
4) be able to delete the elements in the array. Idenitfy the start position of the index and replace it 

var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        while(nums[i] == val){
          nums.splice(i, 1)
        }
    }
};
