// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window){


    var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";
    byeSpeaker.speak=function (names) {


        console.log(speakWord + " " + names);
        };
    window.byeSpeaker = byeSpeaker;
    })(window);