let allen = {
    name : "Sanjay",
    age : 35,
    tech : "JS, Java, Python",
    'work exp': 15

}

console.log(`type of allean is :`,typeof allen);
// print all items
console.log(allen);

// pring individual item
console.log(`name is : ${allen.name}`);
console.log(`Age is : ${allen.age}`);
console.log(`Tech is : ${allen.tech}`);
console.log(`Tech is : ${allen['work exp']}`); // if property is space seperated in object e.g work exp, in this case user [] to fetch work exp

let allen1 = {
    name : "Sanjay",
    age : 35,
    tech : "JS, Java, Python"

}
//