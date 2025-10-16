/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns 
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2  
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (str) => {
  const frequency = {};

  // Step 1: Count how many times each letter appears
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (frequency[letter] === undefined) {
      frequency[letter] = 1; // first time we see this letter
    } else {
      frequency[letter]++; // already seen, so add 1
    }
  }

  // Step 2: Find the first letter that appears only once
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (frequency[letter] === 1) {
      return i; // return its index
    }
  }

  // Step 3: If no unique letters, return -1
  return -1;
};

module.exports = { firstUniqChar };


// Export the function for testing
module.exports = { firstUniqChar };

// Example usage (commented out to avoid interference with tests)
// console.log(firstUniqChar("leetcode")); // → 0
// console.log(firstUniqChar("loveleetcode")); // → 2
// console.log(firstUniqChar("aabb")); // → -1
