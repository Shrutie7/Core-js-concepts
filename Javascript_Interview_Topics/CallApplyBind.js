const name1 = {
    firstName:"Shruti",
    lastName:"Lakhotiya",

}
const name2 = {
    firstName:"Sachin",
    lastName:"Tendulkar",

}
let printName = function(hometown,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state);
}

//USING CALL METHOD - DO FUNCTION BORROWING. Borrow function of other objects and use it with functions of other objects
// each n every method in js has access to call method

// to use methods of one object into another object using call method or using method in any object using call method
// ...Call method implementation... (1st argument as refrence to `this` variable,2nd argument as individual comma separated arguments to function)
printName.call(name2,"Mumbai","Maharshtra"); //Sachin Tendulkar from Mumbai,Maharshtra
printName.call(name1,"Raipur","Chattisgarh");//Shruti Lakhotiya from Raipur, Chattisgarh


// ONLY DIFFERENCE BETWEEN CALL AND APPLY MEHTOD IS THE WAY WE PASS ARGUMENTS (apply - 2nd arg as arraylist , call - 2nd arg as comma seperated args)
// ...Apply method Implementation... (1st argument as refrence to this variable,2nd argument as array list of arguments to the function)

printName.apply(name2,["Mumbai","Maharshtra"]); //Sachin Tendulkar from Mumbai,Maharshtra
printName.apply(name1,["Raipur","Chattisgrah"]); //Shruti Lakhotiya from Raipur,Chattisgrah



// ...Bind method Implementation...(1st argument as reference to this variable,2nd argument as individual comma separated arguments to function) only difference between call and bind mehod is bind method return a copy of method which can be invoked later

let printMyName = printName.bind(name2,"Mumbai","Maharshtra");
let printMyName2 = printName.bind(name1,"Raipur","Chattisgarh");

// create a copy of printName method and bind that to name2 object and will return a function 
printMyName(); //Sachin Tendulkar from Mumbai Maharshtra

printMyName2(); //Shruti Lakhotiya from Raipur Chattisgarh

