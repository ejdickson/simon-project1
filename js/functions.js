// one sheet of all the functions that will be called during game play

// function: one for each of the light & tone buttons

let lightGreen = function(time) {
    $('.greenButton').toggleClass('bright'); 
    $('#lightsaber')[0].play();
    setTimeout(function() { 
        $('.greenButton').toggleClass('bright');
        $('#lightsaber')[0].pause();
        $('#lightsaber')[0].currentTime = 0;
    }, time);
}

let lightRed = function(time) {
    $('.redButton').toggleClass('bright');
    $('#lasers')[0].play();
    setTimeout(function() { 
        $('.redButton').toggleClass('bright');
        $('#lasers')[0].pause();
        $('#lasers')[0].currentTime = 0;
    }, time);
}

let lightYellow = function(time) {
    $('.yellowButton').toggleClass('bright');
    $('#chewie')[0].play();
    setTimeout(function() { 
        $('.yellowButton').toggleClass('bright');
        $('#chewie')[0].pause();
        $('#chewie')[0].currentTime = 0;
    }, time);
}

let lightBlue = function(time) {
    $('.blueButton').toggleClass('bright');
    $('#r2d2')[0].play();
    setTimeout(function() { 
        $('.blueButton').toggleClass('bright');
        $('#r2d2')[0].pause();
        $('#r2d2')[0].currentTime = 0;
    }, time);
}


 // function: add to chain of events array by random number generator (1-4), each number represents a color

 let addSimon = function(arr1) {
    let nextLight = ((Math.floor(Math.random() * 4) + 1));
    arr1.push(nextLight);
}

// function: Simon actions (light & tone i for time)

let lightSimon = function(arr1, time) {
    for (let i = 0; i < arr1.length; i++) { 
        switch (arr1[i]) {
            case 1:
                lightGreen(time);
                break;
            case 2:
                lightRed(time);
                break;
            case 3:
                lightYellow(time);
                break;
            case 4:
                lightBlue(time);
                break;
        }
    }
}

// function: start new round

let newRound = function(arr1, arr2, time) {
    console.log(arr2)
    console.log('New ROUND')
    addSimon(arr1);
    lightSimon(arr1, time);
    console.log("simon: ", arr1);
}

// function: compare player's action to the chain of events created by Simon

let checkArray = function(arr1, arr2, time) {
    let index = 0;
    while (index < arr2.length) {
        // if arr2 === chainEvents, keep going
        if ((arr2[index]) !== (arr1[index])) {
            //game over
            console.log("one wrong move means Game Over");
            gameOver = true;
            alert("GAME OVER!")
            return false;
        } else {
            console.log("Keep going!");
            checkWinRound(arr1, arr2, time);
        }
        index++;
    } 
    console.log('check round now');
    return true;
}

let checkWinRound = function(arr1, arr2, time) {
    if (arr2.length === arr1.length) {
            // update score
            playerScore = Number(playerScore) + Number(1);
            $('#score h3').text(playerScore);
            console.log("Score updated. Keep going!");
            resetPlayer(arr2);
            newRound(arr1, arr2, time);
                
    }
}

let resetPlayer = function(arr2) {
    arr2.splice(0,arr2.length)
}