//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {
  //change testbrackets here. makes easire to change in one place.
  let testbrackets = testbrackets1;

  //implement isBalanced function. checks if the bracket string is balanced.
  let results = isBalanced(testbrackets);

  //used for display no need to change
  let msg = "";

  if (results) {
    msg = `Brackets are balanced ==> ${testbrackets}`;
  } else {
    msg = `Brackets are NOT balanced ==> ${testbrackets}`;
  }

  //display the message
  document.getElementById("results").innerHTML = msg;
}

//takes an array of strings and returns balanced or unbalanced brackets.
function isBalanced(brackets) {
  let stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const balancedBrackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  for (const bracket of brackets) {
    if (openBrackets.includes(bracket)) {
      stack.push(bracket);

      continue;
    } else if (closeBrackets.includes(bracket)) {
      if (stack.length === 0) return false;

      checkLastOpenBracket = stack.pop();
      if (balancedBrackets[checkLastOpenBracket] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
