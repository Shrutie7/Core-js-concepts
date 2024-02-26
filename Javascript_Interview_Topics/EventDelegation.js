// EVENT DELEGATION IS BASED ON EVENT BUBBLING!(how event propogates out in dom tree)


// event delegation giving a single event handler to parent and redirecting/routing child divs on basis of ids  

// document.querySelector("#category").addEventListener('click',(e)=>{
//     console.log(e.target.id);

//     if(e.target.tagName === "LI"){
//         window.location.href = "/" + e.target.id
//     }

// });


// behaviour pattern -> common and reusable to achieve a particular behaviour on any no of child nodes whichever is given the data- attribute 

document.querySelector("#form").addEventListener("keyup",(e)=>{

    console.log(e);

    // check if dataset attribute (data-uppercase) is present on input or not ...
    if(e.target.dataset.uppercase!==undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})
