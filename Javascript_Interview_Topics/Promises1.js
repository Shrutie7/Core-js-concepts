//promise object represents eventual completion or failure of an async operation 
//to solve inversion of control we use promise object instead of passing 1 fun inside another fun we attach the callback fun to the promise object using .then method
//promise object gives us the guarantee that the callback function will definetly be called once the promise is resolved and will be called automatically 
// promise object is immutable and has 3 states pendind,resolved,rejected
// promise object has 2 things promise result and promise state

//ex:
const cart = ["pants","shoes","kurta"];
/*
createOrder(cart,function(orderId){
    proceedToPayment(orderId)

})
*/

//createOrder is async operation which will return us a promise 
// const promise = craeteOrder(cart);

//once promise is resolved it will automatically call the callback fun and result of promise will come inside the callback function 
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })
//this solves problem of IOC

const GITHUB_API ="https://api.github.com/users/Shrutie7"
const user = fetch(GITHUB_API) // represents promise object with promise state as fulfilled(inconsistency in chrome/ coz represents current state of promise), promise result as response with body as readable stream
console.log(user);
user.then(function(data){
    console.log(data);
})


//issue of callback hell can be resolved using promise chaining , make sure to return the function/promise in a promise chain to not lose data

// const promise = craeteOrder(cart);
// promise.then(function(orderId){
//     return proceedToPayment(orderId);
// }).then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// }).then(function(){
//     return updateWallet();
// })