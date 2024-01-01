// normal bind function implementation

const name2 = {
  firstName: "John",
  lastName: "Doe",
};

let printname = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let printMyName = printname.bind(name2, "Mumbai");

printMyName("India"); //John Doe Mumbai India

// creating own implementation of bind function in javascript say mybind function
// if any method has Function.protoype then that method in js can be used through the program with any other methods
// mybind function should return a function and obj should point to this variable printname function needs to be executed . store this in obj which is pointing to printname function 

// this is pointing to printname function which is later to be invoked

Function.prototype.mybind = function (...args) {
  // args[0] has name2 (reference to this) and rest all are arguments


  // this => printname method
  let obj = this;
  let params = args.slice(1); //results in array list with all elemnts except 1st

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); //concat params array and args2 array fro case when arguments is passed in fn call itself
  };
};

let printMyName2 = printname.mybind(name2, "Mumbai");
printMyName2("India"); //John Doe Mumbai India
