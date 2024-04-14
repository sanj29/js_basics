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

console.log(`type of allean is :`,typeof allen);
// print all items
console.log(allen); // entire object
console.log(allen.laptop); //laptop object inside allean object
console.log(allen.laptop.brad); //particular key from laptop,here Brand
console.log(allen.laptop.brad.length);
console.log(allen.laptop.brad?.length); // check key before getting lenght, 
console.log(allen?.laptop?.brad?.length); // we can use ? to check whether item is present or not

delete allen.tech

console.log(allen); // entire object