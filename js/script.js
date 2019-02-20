// one function containing main game play logic taking in time as a variable

// count down 3...2...1 go!

var chainEvents = [];
var playerArray = [];
var playerScore = 0;
var highestScore = 0;
var easy = 1000;
var medium = 750;
var hard = 500;

$('#score h3').text(`Top Score: ${highestScore}`);

function playGame(time) {

    // first move is made by Simon

    newRound(chainEvents, playerArray, time);

    // log player moves

    $('.greenButton').click(function() {
        lightGreen(time);
        playerArray.push(1);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWinRound();
            resetPlayer(playerArray);
        };
    });
    $('.redButton').click(function() {
        lightRed(time);
        playerArray.push(2);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWinRound();
            resetPlayer(playerArray);
        };
    });
    $('.yellowButton').click(function() {
        lightYellow(time);
        playerArray.push(3);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWinRound();
            resetPlayer(playerArray);
        };
    });
    $('.blueButton').click(function() {
        lightBlue(time);
        playerArray.push(4);
        console.log('player: ', playerArray);
        index = 0;
        checkArray(chainEvents, playerArray);
        if (playerArray.length === chainEvents.length) {
            checkWinRound();
            resetPlayer(playerArray);
        };
    });
    

}





// selecting easy/medium/hard button
// once choosen level, buttons are hidden
    // if easy function(time = 1000)
    $('#easy').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        resetGame(chainEvents, playerArray);
        playerScore = 0;
        playGame(easy);
    });
    // if medium function(time = 500)
    $('#medium').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        resetGame(chainEvents, playerArray);
        playerScore = 0;
        playGame(medium);
    });
    // if hard function(time = 750)
    $('#hard').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        resetGame(chainEvents, playerArray);
        playerScore = 0
        playGame(hard);
    });
    