// var name = "John";
// function sayHi (){
//   console.log("Hi " + name);
// }


// var johnGreeter = {};
// johnGreeter.name = "John";
// johnGreeter.sayHi = function (){
//   console.log("Hi " + johnGreeter.name);
// }


// var greeting = "Hi ";
// var johnGreeter = {};
// johnGreeter.name = "John";
// johnGreeter.sayHi = function (){
//   console.log(greeting + johnGreeter.name);
// }


(function (pass_to_global_window) {
  var greeting_local = "Hi ";
  var johnGreeter_local = {};
  johnGreeter_local.name = "John (from inside IIFE)";
  johnGreeter_local.sayHi = function (){
    console.log(greeting_local + johnGreeter_local.name);
}
  // pass johnGreeter_local object to global-window
  pass_to_global_window.johnGreeter_global = johnGreeter_local;
})(window);



// (function (window) {
//   var johnGreeter = {};
//   johnGreeter.name = "John";
//   var greeting = "Hi ";
//   johnGreeter.sayHi = function () {
//     console.log(greeting + johnGreeter.name);
//   }

//   window.johnGreeter = johnGreeter;

// })(window);



