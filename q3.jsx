function maxSum(arr) {
  let max = 0;
  let curr = 0;

  for (let num of arr) {
    curr = Math.max(num, curr + num);
    max = Math.max(max, curr);
  }

  return max;
}