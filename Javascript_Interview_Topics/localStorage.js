// origin : comprises of 3 things -> protocol(http://) , host(akshaysaini.in) , port(8080)

//setdata in localstorage key value pair of data in form of string is stored in localstorage
localStorage.setItem("hello" , "world")


// getdata from localstorage 
localStorage.getItem("hello");

console.log(localStorage)
// o/p -> world


// remove data from localstorage
localStorage.removeItem("hello");

console.log(localStorage)


// clear everything from localstorage
// localStorage.clear();



// in order to store objects in localstorage do JSON.stringify and to fetch them from localstorage do JSON.parse
const user = {name:"Akshay"}
localStorage.setItem("user",JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));
