const intro= {
    name:"Shruti Lakhotiya",
    class:"3-C",
    age:24,
    getintro:function(){
        console.log(this.name + " from " +this.class + " and age is " +this.age)

    }
}

const intro2= {
    name:"Ishan Kishan",
    class:"5-C",
    age:25,

}

let getdetails = function(teamname,matchtype){
    console.log(this.name + " from " +teamname + " plays in " + matchtype)

}


// CALL - FUNCTION BORROWING - ALL JS FUNCTIONS HAVE ACCESS TO CALL METHOD 
// 1st arg is reference to this variable , 2nd ,3rd.. are the comma seperated arguments
intro.getintro.call(intro2) // ishan kishan from 5-C and age is 25
getdetails.call(intro2, "Mumbai Indians" ,"IPL 2024") // ishan kishan from mumbai indians plays in IPL 2024
getdetails.call(intro, "Chennai Super Kings" ,"IPL 2024") // Shruti Lakhotiya from Chennai Super Kings plays in IPL 2024
intro.getintro();   // Shruti Lakhotiya from 3-C and age is 24




// APPLY - ONLY DIFFERENCE IN APPLY AND CALL IS THE WAY WE PASS ARGUMENTS . APPLY - 2ND ARGS IS ARRAYLIST , CALL -2nd ,3rd.. are the comma seperated arguments

getdetails.apply(intro2,["Mumbai Indians" , "IPL 2024"]) //ishan kishan from mumbai indians plays in IPL 2024


//BIND - ONLY DIFFERENCE IN BIND AND CALL IS THAT BIND RETURN A FUNCTION THAT CAN BE INVOKED LATER

let getfinaldetails = getdetails.bind(intro2,"Royal challengers bangalore","IPL 2024");
console.log(getfinaldetails); // return a function can be invoked later
getfinaldetails(); // Ishan Kishan from Royal challengers bangalore plays in IPL 2024