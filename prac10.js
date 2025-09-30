// print all num from 1-50 that are divisible by 3

// using while
let k =1;
while(k<51){
    if(k%3 === 0){
        console.log(k);
    }
    k++;
}
// using for
for(let i = 1; i<51; i++){
    if(i%3 === 0){
        console.log(i);
    }
            
}