function rowSumOddNumbers(n) {
    let start = n * n - (n - 1);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += start + 2 * i;
    }
    return sum;
  }