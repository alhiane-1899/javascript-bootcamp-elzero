function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2 || num === 3 || num === 5) return true;
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) return false
    else {
        for (let i = 7; i < num; i+=2) {
            if (num % i === 0) return false;
        }
    }
    return true;
}

// Test.assertEquals(isPrime(0),  false, "0 is not prime");
// Test.assertEquals(isPrime(1),  false, "1 is not prime");
// Test.assertEquals(isPrime(2),  true, "2 is prime");
// Test.assertEquals(isPrime(73), true, "73 is prime");
// Test.assertEquals(isPrime(75), false, "75 is not prime");
// Test.assertEquals(isPrime(-1), false, "-1 is not prime");
// Test.assertEquals(isPrime(3),  true, "3 is prime");
// Test.assertEquals(isPrime(5),  true, "5 is prime");
// Test.assertEquals(isPrime(7),  true, "7 is prime");
// Test.assertEquals(isPrime(41), true, "41 is prime");
// Test.assertEquals(isPrime(5099), true, "5099 is prime");

console.log(isPrime(0)); // false;
console.log(isPrime(1)); // false;
console.log(isPrime(2)); // true;
console.log(isPrime(73)); // true;
console.log(isPrime(75)); // false;
console.log(isPrime(-1)); // false;
console.log(isPrime(3)); // true;
console.log(isPrime(5)); // true;
console.log(isPrime(7)); // true;
console.log(isPrime(41)); // true;
console.log(isPrime(5099)); // true;
console.log(isPrime(4)); // false;