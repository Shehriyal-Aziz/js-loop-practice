
let num = parseInt(prompt("Enter a number"));
let sum = 0;

while (num > 0) {
    let digit = num % 10;        // last digit
    sum = sum + digit;           // add it
    num = Math.floor(num / 10);  // remove last digit
}

console.log(sum);
