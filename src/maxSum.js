export function maxSum(arr) {
  let max = arr[0];
  let curr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    max = Math.max(max, curr);
  }

  return max;
}