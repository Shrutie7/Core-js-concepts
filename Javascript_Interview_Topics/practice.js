let catarr = ["first","first","first","second","second","third","third"]
let temparr = [...new Set([...catarr])];
console.log(temparr)
let json ={}

temparr.forEach((d)=>{
    json[d]=0;

})
console.log(json);
catarr.forEach((d1)=>{

    for (const key in json) {
        if (key===d1) {
            json[key]=json[key]+1
        }
    }
})
console.log(json)



