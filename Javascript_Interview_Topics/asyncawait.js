//async is used with a function and it will always return a promise even if it returns a non promise value it will wrap it inside a promise
//it will not wrap inside promise if it is already returning a promise
async function getdata(){
    return "namaste";
};

const dataPromise = getdata();
console.log(dataPromise);

const p = new Promise((resolve,reject)=>{
    resolve("Promise resolved Value!!")
})

async function getdata1(){
    return p;

}
const dataPromise1 = getdata1();
console.log(dataPromise1);
dataPromise1.then((res)=>console.log(res))

//async-await combo is used to handle promises 
//await always need to be used inside async function 
//await is used in front of a promise and will give the promise resolved value into a variable


async function getdata2(){
    const data = await p;
    console.log(data);
}
getdata2();

//major diff between async await and then catch is that JS engine/programs appears to wait at that line where await is present/getdata2 function is suspended when it sees await and moves out of call stack until promise is resolved/rejected.and moves back again in callstack once promise is resolved and starts executing line by line from where it left . but with then/catch js engine doesnt wait and moves to next line as time,tide ,js waits for none 
//add settimeout to promise p1 with 5sec

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Promise resolved value!!")
    },5000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Promise resolved value!!")
    },10000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("Promise resolved value!!")
    },20000)
})

//with .then/catch -> line 45 clg namaste javaScript 1 will not wait until p1 is resolved i.e. it will print immediately
function handlePromise1(){
    p1.then((res)=>console.log(res));
    console.log("Namaste JavaScript 1");
}
handlePromise1();

//with async-await -> line 54 clg namaste javaScript2 will wait until p1 is resolved i.e for 5sec 

async function handlePromise2(){
    const data = await p1;
    console.log(data);
    console.log("Namaste JavaScript 2");
}
handlePromise2();


//create 2 promises with different timers so we will have 2 await in a function 
async function handlePromise3(){

    console.log("Hello World");
    const data = await p2;
    console.log(data);
    console.log("Namaste Shruti");

    const data1 = await p3;
    console.log(data1);

}
handlePromise3(); // Hello World print immediately, after 10 sec data comes and namaste shruti comes and again after 20 sec data comes
//REAL WORLD EXAMPLES
//fetch return a promise which value is Response object which has body that is readable stream convert into json using data.json which is again promise once resolve gives json value


const API_URL = "https://api.github.com/users/Shrutie7";

async function handlefetch(){
    // use try catch for error handling
    try{
        const data = await fetch(API_URL);
        console.log(data); //Response Object 
        const dataJson = await data.json();
        console.log(dataJson); // json value
    }
    catch(err){
        console.log(err);
    }

}
handlefetch();
