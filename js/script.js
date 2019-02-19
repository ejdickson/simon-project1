// one function containing main game play logic taking in time as a variable

// count down 3...2...1 go!

function playGame(time) {
    // reset Simon Chain, Player Chain, and Player Score when starting a new game
    var chainEvents = [1, 2, 3, 4];
    var playerArray = [];
    var playerScore = 0;

    // first move

    newRound(chainEvents, playerArray, time)
    console.log('new round started')

    // check check player moves against Simon moves

    // if (playerArray.length === chainEvents.length) {
    //     if (checkArray(chainEvents, playerArray)) {
    //         // update score
    //         playerScore = Number(playerScore) + Number(1);
    //         $('#score h3').text(playerScore);
    //         console.log("Score updated. Keep going!")

    //         newRound(chainEvents, playerArray, time)
                
    //     } else {
    //         console.log("GAME OVER")
    //     }
    // } 

}


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