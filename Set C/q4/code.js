/**
 * You are given an array of positive integers which represents a sequence of jumps.
 * Each element in the array represents the index of the array (0-based) to jump to.
 * You start at the 0th index.
 * Jumping out of bounds will end the sequence.
 * A cycle is formed if you jump to an index you've already visited.
 * Find out if the sequence of jumps forms a cycle.
 *
 * @param {number[]} jumps - An array of numbers where each element represents the index to jump to.
 * @returns {boolean} - Whether the sequence of jumps forms a cycle.
 *
 * @example
 * detectCycle([1, 2, 0]); // true
 * detectCycle([1, 2, 1]); // true
 * detectCycle([2, 1, 4, 1, 9]); // false
 * detectCycle([2, 4, 1, 6, 3, 9, 5]); // false
 * detectCycle([2, 4, 1, 6, 3, 0, 5]); // true
 */
function detectCycle(jumps) {}

module.exports = detectCycle;

// Your own test cases
// e.g.;

// console.log(detectCycle([1, 2, 0])); // true
