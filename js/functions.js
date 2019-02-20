// one sheet of all the functions that will be called during game play

// arr1 = chainEvents (Simon's array)
// arr2 = playerArray (player actions array)
// time = depends on level selected

// function: one function for each of the colored buttons (lights and tones to call for player/simon later)

let lightGreen = function(time) {
    $('.greenButton').addClass('bright'); 
    $('#lightsaber')[0].play();
    setTimeout(function() { 
        $('.greenButton').removeClass('bright');
        $('#lightsaber')[0].pause();
        $('#lightsaber')[0].currentTime = 0;
    }, time);
}

let lightRed = function(time) {
    $('.redButton').addClass('bright');
    $('#lasers')[0].play();
    setTimeout(function() { 
        $('.redButton').removeClass('bright');
        $('#lasers')[0].pause();
        $('#lasers')[0].currentTime = 0;
    }, time);
}

let lightYellow = function(time) {
    $('.yellowButton').addClass('bright');
    $('#chewie')[0].play();
    setTimeout(function() { 
        $('.yellowButton').removeClass('bright');
        $('#chewie')[0].pause();
        $('#chewie')[0].currentTime = 0;
    }, time);
}

let lightBlue = function(time) {
    $('.blueButton').addClass('bright');
    $('#r2d2')[0].play();
    setTimeout(function() { 
        $('.blueButton').removeClass('bright');
        $('#r2d2')[0].pause();
        $('#r2d2')[0].currentTime = 0;
    }, time);
}


 // function: add to chain of events array by random number generator (1-4), each number represents a color

 let addSimon = function(arr1) {
    let nextLight = ((Math.floor(Math.random() * 4) + 1));
    lastLight = chainEvents[chainEvents.length - 1];
    while (nextLight === lastLight) {
        nextLight = ((Math.floor(Math.random() * 4) + 1));
    }
     arr1.push(nextLight);
}

// function: Simon actions (light & tone i for time)
let lightSimon = function(arr1) {
    let currentIndex = 0;
    let gameInterval = setInterval(() => {
        if (currentIndex <= arr1.length) {
            if (arr1[currentIndex] == 1) {
                lightGreen(1000);
            } else if (arr1[currentIndex] == 2) {
                lightRed(1000);
            } else if (arr1[currentIndex] == 3) {
                lightYellow(1000);
            } else if (arr1[currentIndex] == 4) {
                lightBlue(1000);
            }
            currentIndex++
        } else {
            return clearInterval(gameInterval)
        }
    }, 1000)
}

// function: start new round

let newRound = function(arr1, arr2, time) {
    console.log('New ROUND')
    addSimon(arr1);
    lightSimon(arr1, time);
}

// function: compare every player's action to the chain of events created by Simon

let checkArray = function(arr1, arr2, time) {
    let index = 0;
    while (index < arr2.length) {
        // if arr2 === chainEvents, keep going
        if ((arr2[index]) !== (arr1[index])) {
            //game over
            console.log("one wrong move means Game Over");
            gameOver(playerScore, highestScore);
            return false;
        } else {
            console.log("Keep going!");
        }
        index++;
    } 
    let iarr1 = arr1.length - 1;
    let iarr2 = arr2.length - 1;
    if (arr1.length === arr2.length) {
        if ((arr1[iarr1]) !== (arr2[iarr2])) {
            //game over
            console.log("one wrong move means Game Over");
            gameOver(playerScore, highestScore);
            return false;
        } else {
            console.log("Keep going!");
            checkWinRound(arr1, arr2, time);
        }
    }
    console.log('check round now');
    return true;
}

// function: compare player to Simon at the end of the round to add to score and reset player for next round

let checkWinRound = function(arr1, arr2, time) {
    if (arr2.length === arr1.length) {

        // update score
        playerScore = Number(playerScore) + Number(1);
        $('#score h3').text(playerScore);
        console.log("Score updated. Keep going!");
            
        // reset player chain and add another round of Simon
        resetPlayer(arr2);
        newRound(arr1, arr2, time);
    }
}

// reset Player array after each round

let resetPlayer = function(arr2) {
    arr2.splice(0,arr2.length);
}


// reset both Simon and Player arrays to start a new Game

let resetGame = function(arr1, arr2) {
    arr1.splice(0,arr1.length);
    arr2.splice(0,arr2.length);
}


// game over function
    // if player score > leaderboard score

let gameOver = function(newScore, topScore) {
    if (newScore > 10 && newScore > topScore) {
        alert("Game Over! New High Score! Try a harder level");
    } else if (newScore > 10){
        alert("Game Over! Try a harder level!")
    } else if (newScore > topScore){
        alert("Game Over! New High Score!")
    } else if (newScore < 5) {
        alert("GAME OVER! Maybe try an easier level?");
    } else {
        alert("Game Over!");
    }
}