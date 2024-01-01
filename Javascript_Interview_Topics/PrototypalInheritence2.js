let arr = [1,2,3]
let object = {
    name:"poojdi",
    city:"Newyork",
    age:23,
    getIntro:function(){
        console.log(this.name+" "+this.age+""+this.city)
    }
}

let object2 ={
    name:"Shrutdi"
}


// dont do this
object2.__proto__ =object 


Object.prototype.city="JABALPUR"