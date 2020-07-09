Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

1) Have a pointer to start the Array
2) Have another pointer to keep the current count of how many ones they are
3) if condition on the pointer stating weather it is equal to 1
4) loop through the array until you reach the end of the array


var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCountTillNow = 0
    nums.map((num) => {
        if(num == 1) {
            count++
        } else {
            maxCountTillNow = Math.max(count, maxCountTillNow)
            count = 0
        }
    })
    return Math.max(count, maxCountTillNow)
};
