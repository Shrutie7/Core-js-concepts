var c = 1;
// can access functions before initializing due to hoisting in js 
a();
b();
console.log(c);


function a() {
    var c = 10;
console.log(c);
}
function b() {
    var c = 100;
console.log(c);
}