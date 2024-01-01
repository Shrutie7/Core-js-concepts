// 2 ways of event propogation in js
//-EVENT BUBBLING
//-EVENT CAPTURING/TRICKLING

// add event listeners on each div
// 3rd arg in addEventListener function is flag => useCapture => by default false => event bubbling out , true => event capturing/trickling down 
// to stop propogation of any event use e.stopPropagation() stops event at any point of time 


document.querySelector("#grandParent").addEventListener("click", (e) => {
  console.log("Grandparent clicked !");
  e.stopPropagation();
},true);   //capturing

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent clicked !");

},false);   //bubbling

document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked !");

},false);   //bubbling
