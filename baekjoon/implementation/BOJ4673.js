function d(n) {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function getSelfNumbers(limit) {
  const selfNumbers = Array(limit + 1).fill(true);

  for (let i = 1; i <= limit; i++) {
    const generated = d(i);
    if (generated <= limit) {
      selfNumbers[generated] = false;
    }
  }

  const result = [];
  for (let i = 1; i <= limit; i++) {
    if (selfNumbers[i]) {
      result.push(i);
    }
  }
  
  return result;
}

const selfNumbers = getSelfNumbers(10000);
console.log(selfNumbers.join('\n'));
