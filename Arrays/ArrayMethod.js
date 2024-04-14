let data =[5,8,9,10,12]

//PUSH ---> push insert the new value at end and return position
console.log(data.push(11)); // 
console.log(data);

//POP --> remove item from the END and return the removed item
console.log(data.pop()); 
console.log(data);

//SHIFT --> remove item from Start and return the removed item
console.log(data.shift())  
console.log(data);

//UNSHIFT --> Insert item at first position and shift exising item to right hand side.  and return the new lenght of the Array
console.log(data.unshift(0)) 
console.log(data);

// SPLICE --> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(`Removed item at 2nd index :`,data.splice(2,1));
console.log(data);

console.log(`Removed item at 2nd index ${data.splice(2,1,2)} and added new item : 2`); // replace action
console.log(data);

console.log(`Removed item at 2nd index ${data.splice(2,1,21,22,12)} and added new item : 21,22,12`); 
console.log(data);

console.log(`Removed removed last two element: `,data.splice(data.length-2)); // 
console.log(data); 


