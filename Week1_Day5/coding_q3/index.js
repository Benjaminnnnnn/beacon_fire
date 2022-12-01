(function () {
  window.addEventListener("load", init);

  function init() {
    qs("button").addEventListener("click", find);
  }

  function find() {
    console.log("hi");
    let input = qs("#string");
    let solutionIn = qs(".solution--input");
    let solutionOut = qs(".solution--output");
    let solutionExp = qs(".solution--explanation");

    // get user string input
    let string = input.value;

    // clears the input and previous solutions
    input.value = "";
    solutionIn.textContent = "";
    solutionOut.textContent = "";
    solutionExp.textContent = "";

    // compute longest substring
    let [length, longest] = longestSubstring(string);

    // display solution
    solutionIn.textContent = `Input: s="${string}"`;
    solutionOut.textContent = `Output: ${length}`;
    solutionExp.textContent = `Explanation: The answer is "${longest}", with the length of ${length}.`;
  }

  // calculates the longest substring without repeating characters given a string
  function longestSubstring(string) {
    let maxLength = 0;
    let currLength = 0;
    let longest = "";
    let curr = "";
    let s = new Set();

    for (const c of string) {
      if (!s.has(c)) {
        curr += c;
        s.add(c);
        currLength++;

        if (currLength > maxLength) {
          maxLength = currLength;
          longest = curr;
        }
      } else {
        s.clear();
        currLength = 1;
        curr = c;
        s.add(c);
      }
    }
    return [maxLength, longest];
  }

  function qs(selector) {
    return document.querySelector(selector);
  }
})();
