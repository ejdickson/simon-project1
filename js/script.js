// one function containing main game play logic taking in time as a variable

// count down 3...2...1 go!

var chainEvents = [];
var playerArray = [];
var playerScore = 0;
var highestScore = 0;
var easy = 1000;
var medium = 750;
var hard = 500;

$('#score h3').text(`TOP SCORE: ${highestScore}`);

function playGame(time) {

    
    // first move is made by Simon

    newRound(chainEvents, playerArray, time);

    // log player moves

    $('.greenButton').click(function() {
        lightGreen(time);
        playerArray.push(1);
        index = 0;
        checkArray(chainEvents, playerArray);
    });
    $('.redButton').click(function() {
        lightRed(time);
        playerArray.push(2);
        index = 0;
        checkArray(chainEvents, playerArray);
    });
    $('.yellowButton').click(function() {
        lightYellow(time);
        playerArray.push(3);
        index = 0;
        checkArray(chainEvents, playerArray);
    });
    $('.blueButton').click(function() {
        lightBlue(time);
        playerArray.push(4);
        index = 0;
        checkArray(chainEvents, playerArray);
    });
    

}





// selecting easy/medium/hard button
// once choosen level, buttons are hidden
    // if easy function(time = 1000)
    $('#easy').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        playerScore = 0;
        playGame(easy);
    });
    // if medium function(time = 500)
    $('#medium').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        playerScore = 0;
        playGame(medium);
    });
    // if hard function(time = 750)
    $('#hard').click(function() {
        $('#score h3').text(0);
        console.log('New Game');
        playerScore = 0
        playGame(hard);
    });
    //if click Reset Game
    $('#reset').click(function(chainEvents, playerArray, playerScore) {
        $('#score h3').text(0);
        var chainEvents = [];
        var playerArray = [];
        var playerScore = 0;
        resetGame(chainEvents, playerArray);
    });
    