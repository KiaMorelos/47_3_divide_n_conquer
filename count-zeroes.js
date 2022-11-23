// i needed to use the given solution to understand this, so i commented on it extensively.

// countZeroes

// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
  let firstO = firstZero(arr);
  if (firstO === -1) return 0; // if no zeroes return 0

  return arr.length - firstO;
  // if there are zeroes, such as in the first example. The first zero appears at index 4
  // the length of the array is 6
  // 6 - 4 ---> there are 2 zeroes in the array
}

//Accepts an array, defaults to the index at the far left, and the index on the far right of the array, or the beginning/end - returns the INDICE where the first zero appears
function firstZero(arr, lowIdx = 0, highIdx = arr.length - 1) {
  if (highIdx >= lowIdx) {
    let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2); // Find the middle index
    if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
      // (if the middle index is 0, OR the item to the left of the index is a 1) AND the item at that index is EQUAL to 0  - return the middle INDEX
      return midIdx;
    } else if (arr[midIdx] === 1) {
      // if the middle element we just tried to match is not the first 0, run the first zero function again, but this time move the middle index over to the right by 1 element
      return firstZero(arr, midIdx + 1, highIdx);
    }
    return firstZero(arr, lowIdx, midIdx - 1);
    //if the middle element is a 0 but not the first 0, move over the left by one element
  }
  return -1; // if no zeroes return -1
}

module.exports = countZeroes;
