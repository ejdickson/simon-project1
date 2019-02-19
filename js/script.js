// one function containing main game play logic taking in time as a variable

// count down 3...2...1 go!

var chainEvents = [];
var playerArray = [];
var playerScore = 0;
var gameOver = false;

function playGame(time) {
    // reset Simon Chain, Player Chain, and Player Score when starting a new game

    // first move
    newRound(chainEvents, playerArray, time);

    // check check player moves against Simon moves
    

}

// checkWin = (time) => {
//     // if (playerArray.length === chainEvents.length) {
//         if (checkArray(chainEvents, playerArray) === true) {
//             // update score
//             playerScore = Number(playerScore) + Number(1);
//             $('#score h3').text(playerScore);
//             console.log("Score updated. Keep going!");

//             playerArray = [];
//             newRound(chainEvents, playerArray, time);
                
//         } else if (checkArray(chainEvents, playerArray) === false) {
//             alert("GAME OVER");
//         }
// }





// selecting easy/medium/hard button
// once choosen level, buttons are hidden
    // if easy function(time = 1000)
    $('#easy').click(function() {
        $('.levels').hide();
        $('#score h3').text(0);
        playGame(1000);
    });
    // if medium function(time = 500)
    $('#medium').click(function() {
        $('.levels').hide();
        $('#score h3').text(0);
        playGame(750);
    });
    // if hard function(time = 750)
    $('#hard').click(function() {
        $('.levels').hide();
        $('#score h3').text(0);
        playGame(500);
    });
    


// game over function
    // if player score > lowest leaderboard score [leaderboard array/objects]
        // add player score to leader board in position [maybe switch statement?]