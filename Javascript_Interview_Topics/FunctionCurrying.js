// can be done by 2 methods using bind method and closures 

// bind 

let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5); //10=>2*5
let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5); //15=>3*5

multiplyByTwo(2,3) //4 => 2*2 , it will take x as 2 and y as 2 and ignore the 3 
multiplyByThree(4,8) //12 =>3*4 , it will ignore 8

// this is how we curry a function using just a multiply function we create 2 other functions multiplyByThree and multiplyByThree
// so we curry our multiply function and create 2 other functions by passing params 


// using function closures... a function that returns from another function , the new function that is returned has access to variables of old function 

let multiplyclosure = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwoClosure = multiplyclosure(2);
multiplyByTwoClosure(7); // 14 => 2*7
let multiplyByThreeClosure = multiplyclosure(3);
multiplyByThreeClosure(7); // 21 => 3*7


