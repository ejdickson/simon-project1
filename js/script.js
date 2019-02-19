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

    $('.greenButton').click(function() {
        lightGreen(time);
        playerArray.push(1);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.redButton').click(function() {
        lightRed(time);
        playerArray.push(2);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.yellowButton').click(function() {
        lightYellow(time);
        playerArray.push(3);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.blueButton').click(function() {
        lightBlue(time);
        playerArray.push(4);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    

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