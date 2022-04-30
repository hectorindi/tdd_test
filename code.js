let constants = {
  delim: ",",
  str: "",
};
/**
 * Add 2 number spaprated my a comma , input as a string
 */
function add(numString) {
  let result;
  constants.str = numString;
  if (!constants.str) return 0;
  let allNums = getAllValues();
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
  setDelimiter();
  let matched = constants.str.match(constants.delim);
  if (!matched) {
    return [];
  }
  removeNewLine();
  let result = constants.str.split(constants.delim);
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
function setDelimiter() {
  let delim = ",";
  let delimArr = constants.str.split("//");
  if (delimArr.length > 1) {
    delim = delimArr.toString()[1];
    delimArr[1].split("").pop().toString();
    constants.str = delimArr[1].substring(1);
  }
  constants.delim = delim;
}

function removeNewLine() {
  let newstr = "";
  if (constants.str[0] === "\n") {
    constants.str = constants.str.substring(1);
  }
  newstr = constants.str.split("\n").join(constants.delim);
  constants.str = newstr;
}
module.exports = add;
