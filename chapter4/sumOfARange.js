let range = (start, end, step = start < end ? 1 : -1) => {
  let result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
};

let sum = numbers => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

// Test
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
