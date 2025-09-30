
// // ask number from user and print weather the each num from 1 to that num is even or odd

let usernum = parseInt(prompt("enter any number"));
    
console.log(`user input is ${usernum}`);
for(let i = 1; i<= usernum; i++){
    if( i%2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} is odd `);
    }
} 
