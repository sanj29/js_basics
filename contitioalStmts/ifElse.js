
let num1 = 6;
let num2 = 4;

let result = num1 > num2;

if(result)
    console.log("num1 is greater");
else 
    console.log("I am in else blocke ");
    console.log(" this should come in else "); // to have multiple stmt on if-else block, we have to {}

console.log("Bye...");     
// multiple stmt in if else:

if(result){
    console.log("num1 is greater");
    console.log("I am in if blocke ");
}
else {
    console.log("I am in else blocke ");
    console.log("num2 is greater");
}
console.log("Bye..."); 