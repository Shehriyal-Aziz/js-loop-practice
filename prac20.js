// ask input from users and print table of multiplication of each number from 1 - 10
// agr user 4 input de rha h to 1,2,3,4 ki table likho 1-10 tk




let tab = prompt("enter how may table you need");
for(i= 1; i<= tab; i++){
  for(j=1;j<=10;j++){
    console.log(`${i} x ${j} = ${j*i}`);
  }
  console.log( `table of ${i}`);
}
