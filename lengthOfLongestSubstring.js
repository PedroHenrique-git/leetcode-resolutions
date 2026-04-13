/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const lastSeenMap = new Map();
  let left = 0;
  let longest = 0;
  let substr = "";

  for (let right = 0; right < s.length; right++) {
    console.log({ left, right, longest, lastSeenMap });

    const letter = s.charAt(right);

    if (lastSeenMap.has(letter)) {
      left = Math.max(left, lastSeenMap.get(letter) + 1);
    }

    lastSeenMap.set(letter, right);

    longest = Math.max(longest, right - left + 1);
    substr = s.substring(left, right + 1);
  }

  console.log(substr);

  return longest;
};

//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
