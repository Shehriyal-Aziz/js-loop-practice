// all loop practice js is here if you want to try any one just create new js file and paste that code there and connect to html 

// write loop for 1-10

for(let i = 1 ;i<11; i++){
    console.log(i);
};





// for loop for 10-1

for(let i = 10; i>0; i--){
    console.log(i);
};




// print 10-1 using while

let m=20;
while(i>0){
    console.log(m)
    m--;
}





// print even number from 1-20 using for loop

for(let i = 2; i<21;i+=2){
    console.log(i);
}





// print odd num from 1-15 using while 

let l = 1;
while(i<16){
    console.log(l)
    i+=2;
}





// print even from 1-20 using for loop

for (let i = 0; i > 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// print odd from 1-15 using while



let i = 0;
while (i < 16) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

// print table of 5

for(let i = 1; i < 11; i++ ){
    // console.log(i*5);
    console.log(`5 * ${i} = ${i*5}`);
}

// find sum of num from 1-100 using loop

let sum = 0;
for (let i = 1; i < 101; i++) {
    sum = sum + i;
}
console.log(sum);

// print all num from 1-50 that are divisible by 3

let k =1;
while(k<51){
    if(k%3 === 0){
        console.log(k);
    }
    k++;
}

for(let i = 1; i<51; i++){
    if(i%3 === 0){
        console.log(i);
    }
            
}

// ask number from user and print that is that that num is even or odd

let num = prompt("give me any number");

if( num%2 === 0){
    console.log("this is even");
}
else{
   console.log("this is odd"); 
}

// // ask number from user and print weather the each num from 1 to that num is even or odd

let usernum = parseInt(prompt("enter any number"));

for(let i = 1; i<= usernum; i++){
    if( i%2 === 0){
        console.log(`${i} is even`);
    }
    else if(i%2 === 1 ){
        console.log(`${i} is odd `);
    }


} 
    console.log(`user input is ${usernum}`);


// count how many numbers btw 1 - 100 are divisible by both 3 and 5 

for(let i = 1; i <101; i++){
    if(i%3 === 0 && i%5 === 0 ){
        console.log(i);
    }
}

// now use break and continue

// Ql: Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// Prints each number
//  Stops completely when it finds the first number divisible by 7

for(let i = 1; i<101; i++){
    console.log(i);
    if (i%7 === 0){
        
        break;
    }
}



// Q2: Skip Multiples of 3 *
// Write a loop from 1 to 20 that:
//  Skips numbers divisible by 3
//  Prints all others
//  Use continue
// Expected output:
// 1245781011... (no 3, 6, 9, etc.)

for(let i = 1; i<21; i++){
    if(i%3 === 0){
        continue;
    }
    console.log(i)

}

// Q3: Print First 5 Odd Numbers Only
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
//  Then stops the loop

let count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    console.log(i);
    count = count + 1;
    if(count === 5){
        break;
    }
    
  }
}



