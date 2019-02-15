// one sheet of all the functions that will be called during game play

 // function: add to chain of events array by random number generator (0-3), each number represents a color
 let addSimon = function(arr) {
    let nextLight = ((Math.floor(Math.random() * 4) + 1));
    arr.push(nextLight);
    console.log(arr);
}

let lightSimon = function(time, chainEvents) {


}


var gamePlay = function() {
    // empty array chain of events and empty player array
    var chainEvents = [];
    var playerArray = [];
    // while player is still matching the chainEvents, add to chainEvents
        for (i = 0; i < 20; i++) {
            addSimon(chainEvents)
        }

    
    
   


    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over


}