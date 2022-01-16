// example

declare const global: {
  [x: string]: any;
};

const getPrime = (num: number) => {
  let primes = [];
  let i, j;
  for (i = 2; i <= num; i++) primes[i] = true;
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (j = i * 2; j <= num; j += i) primes[j] = false;
    }
  }
  for (i = 2; i <= num; i++) {
    if (primes[i]) {
      console.log("primes: " + i);
    }
  }
};

global.exec = () => {
  getPrime(10);
};
