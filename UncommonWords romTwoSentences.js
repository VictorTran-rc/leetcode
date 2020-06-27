We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.



Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]


Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

var uncommonFromSentences = function(A, B) {
    let words = A.split(" ").concat(B.split(" "));
    let counts = {};
    for(let i = 0; i < words.length; i++){
        if(counts.hasOwnProperty(words[i]) === false)
            counts[words[i]] = 0;
        counts[words[i]]++;
    }

    return words.filter(word => counts[word] === 1);
};
