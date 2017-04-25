function smallestInteger(matrix) {
  let arr = matrix.reduce((a, b) => a.concat(b)),
        i = 0;

 while (i < 1000) {
    if (arr.includes(i)) {
      i++;
    } else {
      break;
    }
  }

  return i;
}
