/**
 * Add 2 number spaprated my a comma , input as a string
 */
function add(numString) {
  let result;
  if (!numString) return 0;
  let allNums = getAllValues(numString);
  if (allNums.length < 2) return 0;
  result = allNums.reduce(
    (prev, curr) => parseInt(prev.toString()) + parseInt(curr.toString())
  );
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
  let result = str.split(",");
  let isValid = true;
  result.forEach((elem) => {
    if (isNaN(parseInt(elem.toString()))) {
      isValid = false;
    }
  });
  if (isValid) {
    return result;
  } else {
    return [];
  }
}
module.exports = add;
