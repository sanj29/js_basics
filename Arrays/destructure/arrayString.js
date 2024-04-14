let words = "My name is Sanjay Singh QA Lead";

console.log(words.split(' '));

let [a,b,,...c] = words.split(' ')
//let [a,b,c,d,e] = words.split(' ')
console.log(c);
console.log(a,b,c);
