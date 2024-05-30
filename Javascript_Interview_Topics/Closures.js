//closure -> function bundled together with its lexical environment / references of the variables of lexical environment

// when a function is returned only write func name-> func along with the refrence to lexical environment will be returned 
// here y forms a closure with the function x and variables of x 
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }

    a = 100 ;  // a as 7 will be replaced by 100 and when y is returned it will have refrence to variable a not its value hence prints a as 100 ; its refrence that is preserved not the value 

   return y;
}
var z = x();
console.log(z);  //f y(){}

// x exceution context is killed, z has function y and will try to print a and it will print 7 bcoz it maintains the lexical scope it hold on to the refrence of variable(not its value) of its lexical environment and they are not garbage collected  

z();//7





// corner case : if  you are not returning a function then it will not retain the variable i.e reference to its lexical environment will not be retained. hence the variables will get garbage once the function is finished executing 

function p(){
    var u = 900; 
    function q(){
        var v = 1000;
        function r(){
            console.log(u,v);
        }
        r();
    }
    q();
    // return q;
}
// p();

var dd = p();
console.log(dd);
dd();