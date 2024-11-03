function fibonacci(num) {
  let prevTwo = [0, 1];


  for (let i = 1; i < num; i += 1) {
    prevTwo = [prevTwo[1], prevTwo[0] + prevTwo[1]];
  }

  return prevTwo[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050console.log()