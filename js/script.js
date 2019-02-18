// if statement for selecting easy/medium/hard button
    // if easy function(time = 1000)
    // if medium function(time = 500)
    // if hard function(time = 750)
    // once choose one, toggle hidden

// on any page, hover buttons to see color change
// $('.gameboard div').hover(function() {
//     $(this).toggleClass('bright');
// })

// one function containing game play logic taking in time as a variable

// count down 3...2...1 go!

async function playGame() {
    // reset Simon Chain, Player Chain, and Player Score when starting a new game
    var chainEvents = [];
    var playerArray = [];
    var playerScore = 0;

    // first move

    addSimon(chainEvents);
    lightSimon(chainEvents, 1000);

    playerAction(playerArray, 1000);

    // check check player moves

    // await checkArray(chainEvents, playerArray)

    // if (playerArray === chainEvents) {
    //     while (checkArray(chainEvents, playerArray) === true) {
            
    //         // update score
    //         playerScore = Number(playerScore) + 1;
    //         $('#score h3').text(playerScore);

    //         //start new round
    //         addSimon(chainEvents);
    //         lightSimon(chainEvents, 1000);
    //         playerAction(playerArray, 1000);
            
    //     }
    // } else {
    //     console.log('GAME OVER!');
    // }


}

playGame()








// while player is still matching the chainEvents, add to chainEvents





    // if player array matches event chain array
        // add 1 to score
        // add another event to chain
    // if player array does not match event chain array
        // alert game over


// game over function
    // if player score > lowest leaderboard score [leaderboard array/objects]
        // add player score to leader board in position [maybe switch statement?]