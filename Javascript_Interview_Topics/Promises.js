//Promise object represents eventual completion or failure of an async operation it is a container for a future value 
//promise object is immutable meaning we cant alter it once it is resolved
//promise object solves the problem of inversion of control so that we dont pass one function inside another api/function amnd lose the control
//instead we attach callbackfunction to promise object which will automatically call this function if the promise object is resolved and data is filled in promise object with result of async operation
// a promise object has only 3 states - pending,fulfilled,rejected 
// a promise object has 2 things promiseState and promiseResult 
// promise object gives the guarantee in our whole transaction bcoz we can resolve promise only once 
// we can solve problem of callback hell using promise chaining by attaching callback function to then method of promise object and we need to always return another promise from promise object otw we may lose some data in chain


//consuming promsies 
const cart = ["shoes","pants","kurta"];

//createOrder return a promise 
const promise = createOrder(cart);

//consuming promises
//use catch to gracefully handle error and always use catch when we are consuming promises
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
}).then(function(orderId){
    return proceedToPayment(orderId)
}).then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

//producing promise 
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        //logic to create order
        //validateOrder
        //return orderId


        //REJECT A PROMISE WITH ERROR
        if(!validateCart(cart)){

            const err = new Error("Cart is not valid");
            reject(err);
        }

        //logic for orderId
        //orderId from api call 
        const orderId = "12345";

        //RESOLVE A PROMISE WITH ORDERID
        if(orderId){
            resolve(orderId);
        }
    });


    return pr;
}

function validateCart (cart){
    //write logic to validate cart
    return true ; 
}

function proceedToPayment (orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}
