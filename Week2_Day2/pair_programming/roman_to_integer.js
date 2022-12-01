function romanToInteger(s) {
  lookup = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let ans = 0;
  let i = 0;
  while (i < s.length - 1) {
    if (
      (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
      (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
      (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
    ) {
      ans += lookup[s.substring(i, i + 2)];
      i += 2;
    } else {
      ans += lookup[s.substring(i, i + 1)];
      i += 1;
    }
  }

  if (i < s.length) {
    ans += lookup[s.substring(i, i + 1)];
  }

  return ans;
}

s1 = "III";
s2 = "LVIII";
s3 = "MCMXCIV";
console.log(romanToInteger(s1));
console.log(romanToInteger(s2));
console.log(romanToInteger(s3));
