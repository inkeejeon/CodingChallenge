/*
Count Instances of a Character in a String

Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).

*/

function charCount(firStr, secStr) {
  let count = 0;
  for (let i = 0; i <= secStr.length; i++) {
    if (secStr.charAt(i) === firStr) {
      count++;
    }
  }
  return count;
}

console.log(charCount('a', 'edabit'))
console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('b', 'big fat bubble'))

// function charCount(firStr, secStr) {
//     let count = 0;
//     for (let i = 0; i < secStr.length; i++) {
//         if (secStr[i].toLowerCase() == firStr.toLowerCase()) {
//             count += 1;
//         }
//     }
//     return count;
// }
