const player1 = {
    name:"MS dhoni",
    team:"CSK"
}
const player2 = {
    name:"Suryakumar Yadav",
    team:"MI"
}
let getdetails = function(ht,state,n){
    console.log(this.name+" " + this.team + ht+state+n)
}
// bind

let gg = getdetails.bind(player1,"Ranchi")
gg("JK","lolo");


// mybindpooja -> all function throughout use ->function return ->this reference

Function.prototype.mybindpooja = function(...args){

    let obj = this
    let params = args.slice(1); 

    return function(...args2){
        obj.apply(args[0],[...params,...args2])

    }
}



let gg1 = getdetails.mybindpooja(player1,"Ranchi")
gg1("JK","kiiki")

