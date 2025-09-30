// print even number from 1-20 using for loop

// method 1
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// method 2
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
