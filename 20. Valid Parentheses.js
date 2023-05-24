/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
  const openBrackets = ['(', '{', '[']
  const closeBrackets = [')', '}', ']']

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i])
    } else if (closeBrackets.includes(s[i])) {
      const lastOpen = stack.pop()
      if (openBrackets.indexOf(lastOpen) !== closeBrackets.indexOf(s[i])) {
        return false
      }
    }
  }

  return stack.length === 0
};
