/**
 * Add 2 number spaprated my a comma , input as a string
 */
function add(numString) {
  let result;
  if (!numString) return 0;
  let allNums = getAllValues(numString);
  if (!allNums) return 0;
  result = allNums.reduce((prev, curr) => prev + curr, 0);
  return result;
}

/**
 * return an array of all the valid values in input string
 */

function getAllValues(str) {
  let matched = str.match(",");
  if (!matched) {
    return [];
  }
  let result;
  return result;
}
module.exports = add;
