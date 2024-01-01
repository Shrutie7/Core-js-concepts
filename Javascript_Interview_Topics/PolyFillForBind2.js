// implementation of bind method

const player = {
  name: "MS Dhoni",
  team: "CSK",
  role: "Captain",
};
const getplayerdetails = function (hometown,state) {
  console.log(this.name + " from " + this.team + " is a " + this.role + " in "+ hometown + " " + state);
};

let getdetails = getplayerdetails.bind(player);
getdetails("Ranchi","Jharkhand");

// writing own implementation of bind function - mybind

// Function.prototype.mybind accessible throughout the methods of js , mybind should return a function , mybind should have this in obj variable . this is poiting to function to be invoked

Function.prototype.mybind = function (...args) {
  // this => getplayerdetails
  let obj = this;
//   args[0] will give reference to this variable i.e object that is `player` here
  let params = args.slice(1) // returns an array list by removing 1st element. hence use apply method instead of call method as apply takes 2nd arg as array

// concat both params and args array as 2nd argument in apply function
  return function (...args2) {
    obj.apply(args[0],[...params,...args2]);
  };

};

let getdetails2 = getplayerdetails.mybind(player,"Ranchi");
getdetails2("Jharkand");