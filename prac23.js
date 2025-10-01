// ask the user for number and + all those digits
// 5534 => 5+5+3+4 => 17

let number = prompt("enter number");
let add = 0;
while (number > 0) {
  let digit = number % 10;
  add = add + digit;
  number = Math.floor(number / 10);
}
console.log(add);
