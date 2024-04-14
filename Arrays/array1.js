let values = new Array();
let valu1=[]

console.log(`Before `, valu1);
console.log(`Before `,values);
valu1 = [4,7,8,9]
values.push('A');
values.push(12);
values.push(function(){
console.log("array fun");
});
console.log(`After :`, valu1);
console.log(`After `,values);

console.log(valu1[0]); // accessing via index
for(let i =0 ; i< valu1.length;i++)
    console.log(valu1[i]);