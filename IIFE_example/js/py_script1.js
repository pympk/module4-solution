// var name = "Yaakov";
// function sayHello (){
//   console.log("Hello " + name);
// }


// var yaakovGreeter = {};
// yaakovGreeter.name = "Yaakov";
// yaakovGreeter.sayHello = function(){
//   console.log("Hello " + yaakovGreeter.name);
// }


// var yaakovGreeter = {};
// yaakovGreeter.name = "Yaakov";
// var greeting = "Hello ";
// yaakovGreeter.sayHello = function(){
//   console.log(greeting + yaakovGreeter.name);
// }


(function (pass_to_global_window) {
  var greeting_local = "Hello ";  // a local variable not accessible in global
  var yaakovGreeter_local = {};  // declare object
  yaakovGreeter_local.name = "Yaakov (from inside IIFE)";  // object property
  // define local sayHello method
  yaakovGreeter_local.sayHello = function () {  
    console.log(greeting_local + yaakovGreeter_local.name);
  }
  // pass yaakovGreeter_local object to global-window
  pass_to_global_window.yaakovGreeter_global = yaakovGreeter_local;
})(window);  // pass window to function


// (function (window) {
//   var yaakovGreeter = {};
//   yaakovGreeter.name = "Yaakov";
//   var greeting = "Hello ";
//   yaakovGreeter.sayHello = function () {
//     console.log(greeting + yaakovGreeter.name);
//   }

//   window.yaakovGreeter = yaakovGreeter;

// })(window);
