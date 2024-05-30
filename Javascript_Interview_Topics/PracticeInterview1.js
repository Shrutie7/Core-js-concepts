// Reverse a string 

function reverseString(str){

    let stru = ""
for(var i=str.length-1; i>=0; i--){
    stru = stru + str[i];
}
return stru;
}

console.log(reverseString("Semma"));


function reverseString1 (str){
    let arr = str.split("");
    let ans =[]
    for(var i=arr.length-1; i>=0;i--){
        ans.push(arr[i]);
    }

    return ans;
}

function removeDuplicates(arr){

    let ansarr =[];
    ansarr = arr.filter((ele,ind)=>arr.indexOf(ele)===ind)
    return ansarr;

    // return ([...new Set([...arr])]);

}
console.log(removeDuplicates([1,2,1,2,3,3,4,2,5]))



console.log(reverseString1("Shruti").join(""));


const users = [
    {"firstName": "John", "lastName": "Cena","age":26},
    {"firstName": "elon", "lastName": "musk","age":26},
    {"firstName": "deepika", "lastName": "padukone","age":66},
    {"firstName": "akshay", "lastName": "Saini","age":26},
]

const fullName = users.map((user)=>user.firstName + " " + user.lastName);
console.log(fullName);



// let json ={}
// let arr = []
// const get = users.map((user,ind)=>{
//     let count = 0 ; 
//     arr.push(user.age);
//     arr.forEach((ele)=>{
//         if(ele === user.age){
//             count = count+1;
//         }
//     })
//     json[user.age] = count;
// })
// console.log(json)
// console.log(arr)


let arr =[]
const ouput = users.reduce(function(acc,curr){

    let count = 0 ; 
  

    arr.push(curr.age);
    console.log(arr)
    arr.forEach((ele)=>{

    if(ele === curr.age){
        count = count+1;
    }
    });

    acc[curr.age] = count;
    return acc;

},{})

console.log(ouput)

const ouput1 = users.reduce(function(acc,curr){


    if(acc[curr.age]){

        acc[curr.age] = ++acc[curr.age];

    }
    else{
        acc[curr.age] = 1;

    }
    return acc;

},{});

console.log(ouput1);


const output2 = users.filter((user)=>user.age<30).map((ele)=>ele.firstName);
console.log(output2);