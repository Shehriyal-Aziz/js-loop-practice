
// count how many number are inserted by users 
// can be used to varify input feild of phone number 

let num = prompt("number");

let count = 0
while(num>0){
  num = Math.floor(num/10);
    count++;

}
console.log(count);