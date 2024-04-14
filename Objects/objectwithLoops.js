let allen = {
    name : "Sanjay",
    age : 35,
    tech : "JS, Java, Python",
    laptop : {
     
        cpu :'i7',
        ram : '8gb',
        brad :'asus',
    }

}

for (let key in allen){
   // console.log(key);
   console.log('Allean Object Items \n');
    console.log(key, allen[key]);
}
console.log('\n***********************\n');
console.log('Laptop object in side Allean Object  \n');
for(let key1 in allen.laptop)
        console.log(key1, allen.laptop[key1]);