let nums =[21,345,556,677,34]

console.log(nums);

nums.forEach((n) =>{ 
    console.log(n*2)
});

console.log(" ForEach with less code")
nums.forEach( n => console.log(n) )

console.log("ForEach with 2 prams ")
nums.forEach( (n,i) => console.log(n,i) ) // here i is index

console.log("ForEach with 3 prams ")
nums.forEach( (n,i,nums) => console.log(n,i,nums) ) // here i is index n nums is our entire array