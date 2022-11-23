// i needed to use the given solution to understand this, so i commented on it extensively.

// A rotated array has just had it elements shifted counterclockise if you were looking at a circle with hollow slots for things to go in it might look like:
///      |
///    7 1 2
//    6     3
///     5 4

// [1, 2, 3, 4, 5, 6, 7] rotate the array to slots counterclockwise it becomes:
// [4, 5, 6, 7, 1, 2, 3]

///      |
///    3 4 5
//    2     6
///     1 7

function findRotatedIndex(array, num) {
  let pivot = findPivot(array); //returns index of the pivot point
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    // if pivot index is greater than 0, AND the number we're looking for is greater than what's at the beginning of the array AND the number we're looking for is less than the item the left of the pivot
    // start searching for the number between 0 and item right before the pivot.
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    // start searching for the number between pivot and and the end of the array
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

//modified binary search, number to look for, the place to start looking, and where to stop looking.
function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;
  // if the array being searched is empty, or the num being search doesn't exist return -1

  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2); // find the middle
    if (array[midIdx] === num) {
      // if the item at the middle is the item we're looking for return the index we found it at
      return midIdx;
    } else if (num < array[midIdx]) {
      // otherise if the item is not at the middle, and the number is less the item at the middle move the 'end' back by one place
      end = midIdx - 1;
    } else {
      // otherise if the item is not at the middle and greater than the item at middle, and the number is less the item at the middle move the 'start' forward by one place
      start = midIdx + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  // if the array only has one item in it, OR the item at the first slot is less than the item at the end of the array, return 0
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2); // find the middle index
    if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1;
    // if the item at the middle is greater than item in next index over, return index next to the middle (forward), return the index of the pivot
    else if (arr[start] <= arr[midIdx]) {
      //otherise if the item at the at beginning is less than or equal to the item at the middle, the pivot isn't at this index, move the starting point over the middle + 1 forward
      start = midIdx + 1;
    } else {
      //move the middle back 1 place
      end = midIdx - 1;
    }
  }
}

module.exports = findRotatedIndex;
