
function isPrime(num){

    if (num <=1 )
        return false

    for (let i = 2; i < Math.sqrt(num); i++){
    if( num % i === 0){
        return false
    }
}
    return true;
    
        
}

let num =1001;

if (isPrime(num)){
    console.log("Prime");

}else
{
    console.log("Not Prime");
}

