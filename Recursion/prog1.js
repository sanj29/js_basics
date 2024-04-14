let num=1
function display(){
    console.log("Hi Recursion !!", num);
    num++;
    if(num == 7770)
        return;
    display();
    
}


display();