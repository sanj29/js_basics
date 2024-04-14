let num =123456

function reverseNumber(num){
    let rev = 0;
    let digit = 0;

    while (num !=0){
        digit = num % 10;
        rev =rev * 10 + digit;    
        num = parseInt(num / 10);
    }
    
    console.log(`Number After reverse :: ${rev}`);
}
console.log(`Number before reverse :: ${num}`);
reverseNumber(num)
