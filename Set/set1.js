// Set  store unique value, unorder--> not maintain insertaiton order, and it is a class, so use constructor to create obj.

let set1 = new Set("Sanjay")

console.log(set1);

// Add value using add method
let set = new Set()
set.add(2)
set.add(4)
set.add(6)
set.add("Sanjay")
set.add("Test")
set.add("mapped")
set.add("Sanjay")

console.log(set);

set.forEach( n =>{
    console.log(n);
})