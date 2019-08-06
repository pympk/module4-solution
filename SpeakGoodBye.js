// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;


// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (pass_to_global) {
  var speakWord = "Good Bye";
  var byeSpeaker = {};  // Create an object, called 'byeSpeaker' 
  byeSpeaker.speak = function (name) {  // // Create .speak method
    console.log(speakWord + " " + name);
  }
  // Expose the 'byeSpeaker' object to the global scope
  pass_to_global.byeSpeaker = byeSpeaker;
})(window);  // pass window to function's argument


