// AND &
// OR ||  
//NOt !
let x = 7, y = 8 ,z = 9

let result = x < y && x < z

console.log( "Result is ", result);
let n = !result
console.log("making it revers :: ",n);

result = x < y && z < x
console.log( "Result is ", result);
n = !result
console.log("making it revers :: ",n);

result = x < y || z < x
console.log( "Result is ", result);
n = !result
console.log("making it revers :: ",n);