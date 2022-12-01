/**
 * Navigator: Benjamin
 * Driver: Albert
 */

// https://leetcode.com/problems/climbing-stairs/

// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

/*
    Approach #1: Dynamic Programming with Inductive reasoning
        iterative dynamic programming using inductive mathematical reasoning
        induction hypothesis:
            suppose we have function S(n) which outputs the number of ways to climb to the top for n stairs
            for any integer n, if we know the number of ways to climb to the top for n-1 and n-2, we can prove S(n) = S(n-1) + S(n-2)
        induction steps:
            if we know S(n-1) and S(n-2), to reach n level from n-1 or n-2, we know there are only two possible scenarios, because we know that it is only possible to take 1 or 2 steps
                n-1 to n: total number of steps equals S(n-1)
                n-2 to n: two possible scenarios, so total number of steps equals S(n-2)
                    1) take 1 step, which leads us to level n-1, where we already counted the answer
                    2) take a 2 step, which leads us to level n
                Conclusion: to reach level n, the total number is going to be S(n-1) + S(n-2)
        base cases:
            when n=1, there is 1 way
            when n=2, there are 2 ways
                1+1, or 2
*/
function climbStairsDP(n) {
  let answer = new Array(n).fill(0);
  answer[0] = 1;
  answer[1] = 2;

  for (let i = 2; i < n; i++) {
    answer[i] = answer[i - 1] + answer[i - 2];
  }

  return answer[n - 1];
}

const test1 = 2; // 2
const test2 = 3; // 3
// console.log( climbStairsDP(test1) );
// console.log( climbStairsDP(test2) );

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function climbStairsRec(n) {
  /*
  Recursive Approach:
      recursive backtracking
      storing previously answered Qs

  Base case(s):
      if n=0, return 1

      return H(n-1) + H(n-2)
*/

  function helper(num) {
    if (num < 0) return 0;
    if (num === 0) return 1;

    return helper(num - 1) + helper(num - 2);
  }

  return helper(n);
}

const test3 = 10;
const test4 = 30;

// console.log( climbStairsRec(test3) );
// console.log( climbStairsRec(test4) );
