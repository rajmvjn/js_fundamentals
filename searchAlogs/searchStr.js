function searchNaive(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
      console.log(j);
      if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(searchNaive("lala lallaalala", "lal"));
