console.log("up and running");
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([)]"
// Output: false
// Example 5:
// Input: s = "{[]}"
// Output: true

//  @param {string} s
//  @return {boolean}

//Hmm, i need to keep track of the {([])}s.
//I am thinking about ++ a counter with each open
//bracket and -- with each close.
//At the end, all counters should zero out if valid.
//counter names: pCount = (perentheses), sCount = [square], cCount = {curly}
//no validifying input

//Just thought, we need to make sure theres no closing before opening

var isValid = function (s) {
  let pCount = 0;
  let sCount = 0;
  let cCount = 0;
  let fault = 0;

  for (let i = 0; i < s.length; i++) {
    //Parentheses Check, May rewrite functions
    if (s[i] == "(") {
      if (pCount >= 0) {
        pCount++;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }

    if (s[i] == ")") {
      if (pCount >= 0) {
        pCount--;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }
    //Square Check, May rewrite functions
    if (s[i] == "[") {
      if (sCount >= 0) {
        sCount++;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }
    if (s[i] == "]") {
      if (sCount >= 0) {
        sCount--;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }
    //Curly Check, May rewrite functions
    if (s[i] == "{") {
      if (cCount >= 0) {
        cCount++;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }
    if (s[i] == "}") {
      if (cCount >= 0) {
        cCount--;
      } else {
        console.log("invalid placement");
        fault = 1;
      }
    }
    console.log(pCount, sCount, cCount);
  }
  //Check if Zeroed
  console.log("final: " + pCount, sCount, cCount);
  //Return t/f
  //if (pCount + sCount + cCount !== 0) { Whoops, this wont work! I need to check if each is 0...
  if (pCount == 0 && sCount == 0 && cCount == 0) {
    console.log("zeroed and valid!");
    return true;
  } else {
    console.log("not zeroed");
    return false;
  }
};

isValid("([)]");
//Tests
//"(][][)"

//Failed:
//"([)]" Need interception detection
//might need to switch to nested functions! (oh god)
