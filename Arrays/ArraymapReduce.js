let nums =[21,32,43,54,65,76,89]

console.log("Printing all item of the array");
nums.forEach(n => {
    console.log(n);
})

console.log(" filtering all even then printing all");
nums.filter( n  =>  n%2===0)
.forEach( n =>{
    console.log(n);
})

console.log(" filtering all even then printing all and duble them");

nums.filter( n  =>  n%2===0)
.map(n => n*2)
.forEach(n => {
    console.log(n);
})
    
console.log(" Reduce value to single");
let result= nums.filter( n  =>  n%2===0)
.map(n => n*2)
.reduce((a,b) =>a+b);

console.log(result);
