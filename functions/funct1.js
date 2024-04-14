function greet(num){

    console.log( `\nHi Welcome to JS programing, learn multiplication table for ${num}`);
    for (let i =1 ; i <= 10 ; i++)
        console.log(`${num} x ${i} = `, num*i);
}
greet(1);
greet(2);
greet(3);
greet(4);