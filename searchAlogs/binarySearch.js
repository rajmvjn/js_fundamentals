function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = arr[Math.floor((left + right) / 2)];
    console.log(mid, val);
    if (mid === val) return mid;
    else if (mid > val) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 1));
