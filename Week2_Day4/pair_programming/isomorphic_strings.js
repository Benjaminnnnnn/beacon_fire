//Question 205
// Driver:  May Wirapa | Navigator: Benjamin Zhuang

// Pseudocode
/*
Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */
//both input have to be the same length >> we don;t to check the valid input length

//have similar mapping
//have 2 object use character to integer mapping
// e : 0
//g : 1+2 = 3

//a : 0
//d : 1+2 = 3

//go to both string again iteating thru s and t again
//check if cha at given index the same as ..
//call our mapping o1 and o2
//we check o1[s[i]] !== o2[t[i]] reutrn false
//after looping all the character >> return true

//time: o(n)
//space: o(n)
function isIsomorphic(s, t) {
  const o1 = {};
  const o2 = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in o1) {
      o1[s[i]] += i;
    } else {
      o1[s[i]] = i;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] in o2) {
      o2[t[i]] += i;
    } else {
      o2[t[i]] = i;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (o1[s[i]] !== o2[t[i]]) {
      return false;
    }
  }
  return true;
}

const testcase1_s = "egg";
const testcase1_t = "add";
const testcase2_s = "foo";
const testcase2_t = "bar";
console.log(isIsomorphic(testcase1_s, testcase1_t));
console.log(isIsomorphic(testcase2_s, testcase2_t));
