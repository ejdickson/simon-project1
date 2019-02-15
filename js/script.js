// if statement for selecting easy/medium/hard button
    // if easy function(1 second)
    // if medium function(1/2 second)
    // if hard function(1/4 second)

// one function containing game play logic taking in time as a variable
    // empty array chain of events
var chainEvents = [];
    // add to chain of events array by random number generator (0-3), each number represents a color (function?)
let addSimon = function() {
    let nextLight = ((Math.floor(Math.random() * 3) + 1));
    chainEvents.push(nextLight);
    console.log(chainEvents);
}



    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over





// let gamePlay = function(evt, time) {

// }

// game over function
    // if player score > lowest leaderboard score [leaderboard array/objects]
        // add player score to leader board in position [maybe switch statement?]