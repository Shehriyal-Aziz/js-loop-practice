// Q3: Print First 5 Odd Numbers Only
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
//  Then stops the loop

let count = 0;
for (i = 0; i < 101; i++) {
  if (i % 2 === 1) {
    console.log(i);
    count++; // ya count = count + 1; 
  }
  if (count === 5) {
    break;
  }
}
