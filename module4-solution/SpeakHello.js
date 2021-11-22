// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function (window){

    var helloSpeaker = {};
    var speakWord = "Hello";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
    helloSpeaker.speak= function (name) {
        console.log(speakWord + " " + name);
    };
window.helloSpeaker = helloSpeaker;
})(window);
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
