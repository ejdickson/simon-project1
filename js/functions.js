// one sheet of all the functions that will be called during game play

 // function: add to chain of events array by random number generator (1-4), each number represents a color
 let addSimon = function(arr) {
    let nextLight = ((Math.floor(Math.random() * 4) + 1));
    arr.push(nextLight);
    console.log(arr);
}

// function: Simon act on the chain of events for player to see and follow
let lightSimon = function(time, arr) {
    for (let i = 0; i < arr.length; i++) {
        // light i
        // tone i 
    }
}

// function: take player actions and input to an array that can be compared to chain of events
let playerMode = function() {

}

// function: compare player's action to the chain of events created by Simon
let checkArray = function(arr1, arr2) {
    i = 0;
    while (i < arr1.length + 1) {
        // if playerArray === chainEvents, keep playing
        if ((arr2[i]) === (arr1[i])) {
            i++
        } else {
            //game over
            console.log("Game Over")
            return false
        }
    return true
    }
}


var gamePlay = function() {
    // empty array chain of events and empty player array
    var chainEvents = [];
    var playerArray = [];
    // while player is still matching the chainEvents, add to chainEvents
    while (playerArray === chainEvents) {
        addSimon(chainEvents)

    }

    
    
   


    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over


}