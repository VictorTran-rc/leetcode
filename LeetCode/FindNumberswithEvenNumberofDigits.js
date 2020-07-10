Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5

//1) one pointer to keep track of how many elements are even
//2) loop through the array
//3) set another pointer to count the number of digits
//4) convert the numbers into a digit
//5) Divide the numbers in the array by 10 to find if it is even or odd
//6) if condition on weather they are even
//7) if even add count to pointer

var findNumbers = function(nums) {
    let evenNumber = 0;
    for(let num of nums){
        let digit = 0;

        while(num > 0){
            digit++;
            num = parseInt(num /10);
        }
            if (digit % 2 === 0 )
                evenNumber++;
        }
        return evenNumber;
    };
