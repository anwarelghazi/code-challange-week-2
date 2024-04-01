function primeFilter(arr) {
    // helper function to check if a number is prime
    const isPrime = num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
  
    // filter the array to only include prime numbers
    return arr.filter(isPrime);
  }
  

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = primeFilter(inputArray);
  console.log(primeNumbers); 