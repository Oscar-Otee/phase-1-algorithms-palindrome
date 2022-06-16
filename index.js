function isPalindrome(word) {
  // Write your algorithm here
  let wordString = word.toLowerCase();
  let splitWord = wordString.split("");
  let reverseWord = splitWord.reverse();
  let joinWord = reverseWord.join("")


 
if (joinWord === wordString) {
  return true;
}

else if (joinWord !== wordString) {
  return false;
}

}

console.log(isPalindrome("abba"));
//console.log(joinWord);
/* 
  Add your pseudocode
  Take the word as an input and change it to lowercase. 
  Then split it.
  Then revervse it.
  Join the elements.
  compare if the the joined-reverse word is equal to the lower-cased word.
  If equal, return true as an output.
  If not, return false as an output.
NB: all the above should happen inside isPalindrome function.
Finally, test the result.

*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

