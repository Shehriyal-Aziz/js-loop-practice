// print odd num from 1-15 using while 
// method 1
let l = 1;
while(l<16){
    console.log(l);
    l+=2;
}
// method 2
let i = 1;
while(i<16){
    if(i%2 === 1){
        console.log(i);
    }
    i++;
}