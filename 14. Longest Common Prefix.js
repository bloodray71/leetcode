/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  const minLength = Math.min(...strs.map(str => str.length))
  let commonPrefix = ''

  for (let i = 0; i < minLength; i++) {
    const currentChar = strs[0][i]
    if (strs.every(str => str[i] === currentChar)) {
      commonPrefix += currentChar
    } else {
      break
    }
  }

  return commonPrefix;
};
