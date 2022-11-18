function sortedFrequency(arr, numToFind) {
  let firstIdx = findFirstOccurence(arr, numToFind);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLastOcurrence(arr, numToFind);
  return lastIdx - firstIdx + 1; // The last index where the number we're looking for appears minus the first index where it appears + 1 to make the math correct( the array index starts one off) equals the count
}

// find the first index where the number being searched for occurs
function findFirstOccurence(
  arr,
  numToFind,
  lowIdx = 0,
  highIdx = arr.length - 1
) {
  if (highIdx >= lowIdx) {
    let midIdx = Math.floor((lowIdx + highIdx) / 2); // find the middle index
    if (
      (midIdx === 0 || numToFind > arr[midIdx - 1]) &&
      arr[midIdx] === numToFind
    ) {
      // if (the middle index is 0, OR the number we're looking for is greater than the number item to the left of the middle) AND the item at the middle is EQUAL to the number being searched for, return the index
      return midIdx;
    } else if (numToFind > arr[midIdx]) {
      // if the item in the middle is less than the number to find, run the func again and move forward 1 index
      return findFirstOccurence(arr, numToFind, midIdx + 1, highIdx);
    } else {
      // if the item in the middle is greater than the number to find, run the func again and move back 1 index
      return findFirstOccurence(arr, numToFind, lowIdx, midIdx - 1);
    }
  }
  return -1;
}

// find the last index where the number being searched for occurs
function findLastOcurrence(
  arr,
  numToFind,
  lowIdx = 0,
  highIdx = arr.length - 1
) {
  if (highIdx >= lowIdx) {
    let midIdx = Math.floor((lowIdx + highIdx) / 2); // find the middle
    if (
      (midIdx === arr.length - 1 || numToFind < arr[midIdx + 1]) &&
      arr[midIdx] === numToFind
    ) {
      // if (the middle index last item of the array, OR the number we're looking for is less than the number item to the right of the middle) AND the item at the middle is EQUAL to the number being searched for, return the index
      return midIdx;
    } else if (numToFind < arr[midIdx]) {
      // if the item in the middle is greater than the number to find, run the func again and move back 1 index
      return findLastOcurrence(arr, numToFind, lowIdx, midIdx - 1);
    } else {
      // if the item in the middle is less or equal to than the number to find, run the func again and move forward 1 index
      return findLastOcurrence(arr, numToFind, midIdx + 1, highIdx);
    }
  }
  return -1;
}

module.exports = sortedFrequency;
