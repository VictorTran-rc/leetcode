Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

var firstUniqChar = function(s) {
 let characters = {}
 let result = -1 
 
 for( let char of s){
     if(characters[char] === undefined){
         characters[char] = 1
     }else{
         characters[char]++
     }
 }
     
     for(let i =0; i < s.length; i++ ){
         let char = s.charAt(i)
         if(characters[char] === 1){
         return i;
     }
 }
    return result; 
};