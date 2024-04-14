let data=[];

for(let i =1 ; i <= 20; i++)
    data.push(i*2);

console.log(data);

data[30]=51;

// FOR OF Loop, use mostly inc ase array, not need to get key and fetch the values
for( let n of data){
    console.log(n);
}
console.log(" ");

// Here based on key or index we are getting values
for( let key in data){
    console.log(data[key]);
}

console.log(data[31])