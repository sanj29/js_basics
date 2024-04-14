// Map is class

let map = new Map();


map.set("name", "Sanajy")
map.set("name", "Sanjay")
map.set("Age", "20")
map.set("tech", "JAVA")

console.log(map);

console.log(map.keys())
console.log(map.values())

console.log(map.has("Sanjay"))

console.log(map.has("Sanajy"))

//For of 
for(let [k,v] of map){
    console.log(k, " : ", v);
}

// forEach
map.forEach((v,k) =>{
    console.log(k ,":" ,v );
})