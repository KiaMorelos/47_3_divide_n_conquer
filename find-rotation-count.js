// i needed to use the given solution to understand this, so i commented on it extensively.

// the index at which the lowest number appears is the number of times the array was rotated
function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
  if (highIdx < lowIdx) return 0;
  if (highIdx === lowIdx) return lowIdx;

  let midIdx = Math.floor((lowIdx + highIdx) / 2); // find the middle

  if (midIdx < highIdx && arr[midIdx + 1] < arr[midIdx]) return midIdx + 1;
  // if the middle index is less than the HIGH index AND the item to the right of the middle is less than item at the middle, than return return the middle index plus one

  // if the middle index is greater than the low index AND the item in the middle less than the item to left of the middle return the middle index
  if (midIdx > lowIdx && arr[midIdx] < arr[midIdx - 1]) {
    return midIdx;
  }

  // if item at the high index is greater than the middle index, search again, but search left side of the middle now
  if (arr[highIdx] > arr[midIdx]) {
    return findRotationCount(arr, lowIdx, midIdx - 1);
  }

  //otherwise, search again on right side of the middle
  return findRotationCount(arr, midIdx + 1, highIdx);
}

module.exports = findRotationCount;
