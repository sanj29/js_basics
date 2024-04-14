let nums =[2,4,5,67,8,9]

console.log(nums);

console.log("Destructing array,  here a, b, c & d the values from 0th index till the num of varibale it will assgin values");
// Destructing array,  here a, b, c & d the values from 0th index till the num of varibale it will assgin values
let [a,b,c,d] = nums;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("we can skip any index like, [2,4,5,67,8,9] here we skiped  5 and 8 from the array.");
// we can skip any index like, [2,4,5,67,8,9] here we skiped  5 and 8 from the array.
let [i,j,,k,,l] = nums

console.log(i);
console.log(j);
console.log(k);
console.log(l);
