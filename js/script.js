// if statement for selecting easy/medium/hard button
    // if easy function(1 second)
    // if medium function(1/2 second)
    // if hard function(1/4 second)

// one function containing game play logic taking in time as a variable
    
var chainEvents = [];
var playerArray = [];
// while player is still matching the chainEvents, add to chainEvents

    while (checkArray(chainEvents, playerArray)) {
        addSimon(chainEvents)
    }
   


    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over


// game over function
    // if player score > lowest leaderboard score [leaderboard array/objects]
        // add player score to leader board in position [maybe switch statement?]