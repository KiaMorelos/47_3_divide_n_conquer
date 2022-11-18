function findFloor(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
  if (lowIdx > highIdx) return -1; // the floor does not exist here
  if (num >= arr[highIdx]) return arr[highIdx];
  // if the num we want the floor of is greater than or equal to the number at the high index return number at the high index

  let midIdx = Math.floor((lowIdx + highIdx) / 2); // find the middle

  if (arr[midIdx] === num) return arr[midIdx];
  // if item at the the middle is EQUAL to number give, return that item at middle

  if (midIdx > 0 && arr[midIdx - 1] <= num && num < arr[midIdx]) {
    // if the middle index is greater than 0 AND the item to left of the middle is less than or equal to number give AND the number given is less than item at the middle index,  the floor is item to the left of middle, return it
    return arr[midIdx - 1];
  }

  if (num < arr[midIdx]) {
    return findFloor(arr, num, lowIdx, midIdx - 1);
    // if the number is less than the number at the middle index fun the function again, but search the left side of the array now
  }

  return findFloor(arr, num, midIdx + 1, highIdx);
  // otherise the number is GREATER than the number at the middle index run the function again, but search the right side of the array now
}

module.exports = findFloor;
