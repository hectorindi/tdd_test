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

function getAllValues(numString) {
  let resultDeli = getDelimiterAndUpdateStr(numString);
  let delim = resultDeli[0];
  numString = resultDeli[1];
  let matched = numString.match(delim);
  if (!matched) {
    return [];
  }
  numString = removeNewLine(numString, delim);
  let result = numString.split(delim);
  let isValid = true;
  result.forEach((elem) => {
    if (isNaN(parseInt(elem.toString()))) {
      isValid = false;
    } else if (parseInt(elem.toString()) < 0) {
      isValid = false;
    }
  });
  if (isValid) {
    return result;
  } else {
    return [];
  }
}
/**
 * return an array of all the valid values in input string
 */
function getDelimiterAndUpdateStr(str) {
  let delim = ",";
  let strWithoutDelim = str;
  let delimArr = str.split("//");
  if (delimArr.length > 1) {
    delim = delimArr.toString()[1];
    delimArr[1].split("").pop().toString();
    strWithoutDelim = delimArr[1].substring(1);
  }
  return [delim, strWithoutDelim];
}

function removeNewLine(str, delim) {
  let newstr = "";
  if (str[0] === "\n") {
    str = str.substring(1);
  }
  newstr = str.split("\n").join(delim);
  return newstr;
}
module.exports = add;
