/* Coding Challenge #1
Write a function that takes the base and height of a triangle
and return its area.
Examples
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
 */

const input = require("readline-sync");

function areaOfTriangle(baseValue, heightValue) {
  baseValue = input.question("What is the base length of the triangle? ");
  heightValue = input.question("What is the height of the triangle? ");

  return (baseValue * heightValue) / 2;
}

console.log("The area of the triangle is " + areaOfTriangle() + ".");
