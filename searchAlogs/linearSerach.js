function lS(arr, elem) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === elem) return i;
  return -1;
}

console.log(lS([1, 2, 3], 22));
