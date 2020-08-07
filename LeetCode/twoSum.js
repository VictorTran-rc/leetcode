Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

// 1) Create map that holds the numbers and the indices- location of the element 
// 2) Have an empty array to store the number and the indices
// 3) loop through every element in the array 
// 4) whatever variable that we are on. Save it to nums to keep track of where it is 
// 5) Save the differences between the number you are on to the target 
// 6) check if the number sorted in the array is in the map 
// 7) have the complement number in the array be the index 

Hash map methond
var twoSum = function(nums, target) {
   const addition = {};
    for(let i=0; i<nums.length; i++){
        if(addition[nums[i] ]>=0){
            return [addition[nums[i] ], i]
        }
    addition[target-nums[i]]= i
    }
};


let twoSum = function(nums, target){
  const previousValues = {}
  for(let i =0; i < nums.length; i++){
    const currentNumber = nums[i];
    const neededValue = target - currentNumber
    const index2 = previousValues[neededValue]
  if(index2 != null){
    return [index2, i]
  }else{
    previousValues[currentNumber] = i
  }
 } 
}
