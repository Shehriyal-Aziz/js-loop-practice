// count how many numbers btw 1 - 100 are divisible by both 3 and 5 

for(let i = 1; i <101; i++){
    if(i%3 === 0 && i%5 === 0 ){
        console.log(i);
    }
}