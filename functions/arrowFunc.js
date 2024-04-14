let greet =  (num1, num2,num3=1) =>{
    console.log (num1, num2, num3 )
    return num1+num2+num3;
}

let res =greet(10,12);
console.log(res);

 res =greet(10,12,22);
console.log(res);

let add =  (num1, num2,num3=1) => num1+num2+num3;


let res1 =greet(10,12);
console.log(res1);