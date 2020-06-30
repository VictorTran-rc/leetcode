Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

backtracking is mostly used for permutations or all possible combinations.
So establish the output data structure you can call it backtrack with some intial data

Backtracking you set a base case and then have the function have a bunch of decisions
are a set of decisions that you can make in the function.

3 key things for backtracking and how it effects the function

//Our choice
wheather we place a left or right parentheses at a certain decision point in our recursion
Do we open a bracket or do we close a bracket
if n = 3 then we can only have 3 open and close brackets

//Our Constraints
we cannot place a left or right parentheses unless we have left parentheese to match against

//Our Goal
place all k left and all k right parentheses

//p a basecase for the recuresion
if condition for the open parentheses
if condition for the closing parentheses

1)
2)
3)
4)
5)

function parens(left,right,str,result) {
    if(left===0 && right===0) {
	  result.push(str);
	}
	if(left>0) {
	  parens(left-1,right+1,str+"(",result);
	}
	if(right>0) {
	 parens(left,right-1,str+")",result);
	}
  }
  var generateParenthesis = function(n) {
     var result=[];
     var str="";
	 parens(n,0,"",result);
	 return result;
   };
