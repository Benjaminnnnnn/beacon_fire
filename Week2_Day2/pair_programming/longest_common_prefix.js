function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let s = strs[0];
  let min = s.length;

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < min && strs[i][j] === s[j]) j++;
    min = Math.min(j, min);

    // shortcut the code since there are no common prefixes
    if (min === 0) break;
  }

  return s.substring(0, min);
}

strs1 = ["flower", "flow", "flight"];
strs2 = ["dog", "racecar", "car"];
strs3 = ["cir", "car"];

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
