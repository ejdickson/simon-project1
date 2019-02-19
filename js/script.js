// one function containing main game play logic taking in time as a variable

// count down 3...2...1 go!

async function playGame(time) {
    // reset Simon Chain, Player Chain, and Player Score when starting a new game
    var chainEvents = [];
    var playerArray = [];
    var playerScore = 0;

    // first move

    addSimon(chainEvents);
    lightSimon(chainEvents, time);

    playerAction(playerArray, time);

    // check check player moves

    // await checkArray(chainEvents, playerArray)

    if (playerArray.length === chainEvents.length) {
        console.log("Checking Arrays")
        let compare = checkArray(chainEvents, playerArray)
        if (compare === true) {
            
            // update score
            playerScore = Number(playerScore) + 1;
            $('#score h3').text(playerScore);
            console.log("Keep going!")

            //start new round
            addSimon(chainEvents);
            lightSimon(chainEvents, time);
            playerAction(playerArray, time);
            
        } else {
            console.log("Game Over")
        }
    }


}

// selecting easy/medium/hard button
// once choose one, toggle hidden
    // if easy function(time = 1000)
    $('#easy').click(function() {
        playGame(1000);
        $('.levels').hide();
    });
    // if medium function(time = 500)
    $('#medium').click(function() {
        playGame(750)
        $('.levels').hide();
    });
    // if hard function(time = 750)
    $('#hard').click(function() {
        playGame(500)
        $('.levels').hide();
    });
    











// while player is still matching the chainEvents, add to chainEvents





    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over


// game over function
    // if player score > lowest leaderboard score [leaderboard array/objects]
        // add player score to leader board in position [maybe switch statement?]