// count how many letters are in word given by user 


let word = prompt("enter word");
let count = "";
for (i = word.length-1; i >= 0  ; i--) {
    count++;
}
 console.log(`Number of letters in the word: ${count}`);
// result sherry to 6 
