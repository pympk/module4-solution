// sayHello();
// sayHi();


// yaakovGreeter.sayHello();
// johnGreeter.sayHi();


function a(){
  console.log("a says 'Hello Coursera!'");
}
a();

var b = function (){
  console.log("b says 'Hello Coursera!'");
}
b();

// function is just an object, we can put () around it
var c = (function (){
  console.log("c says 'Hello Coursera!'");
})
c();

// // Immediately Invoked Function Expressions (IIFEs)
// Invoke function by putting () behind it
(function (){
  console.log("IIEF says 'Hello Coursera!'");
})();

(function (name){
    console.log("IIEF_arg says 'Hello " + name);
})("Coursera!'");

yaakovGreeter_global.sayHello();
johnGreeter_global.sayHi();


// // Immediately Invoked Function Expression
// // IIFE
// (function (name) {
//   console.log("Hello " + name);
// })("Coursera!");






