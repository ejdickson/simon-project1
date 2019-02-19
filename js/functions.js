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
    // return;
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

// function: take player actions and input to an array that can be compared to chain of events
// let index = 0;

let playerAction = function(arr1, arr2, time) {
    $('.greenButton').click(function() {
        lightGreen(time);
        arr2.push(1);
        console.log('player: ', arr2);
        index = 0;
        checkArray(arr1, arr2);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.redButton').click(function() {
        lightRed(time);
        arr2.push(2);
        console.log('player: ', arr2);
        index = 0;
        checkArray(arr1, arr2);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.yellowButton').click(function() {
        lightYellow(time);
        arr2.push(3);
        console.log('player: ', arr2);
        index = 0;
        checkArray(arr1, arr2);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
    $('.blueButton').click(function() {
        lightBlue(time);
        arr2.push(4);
        console.log('player: ', arr2);
        index = 0;
        checkArray(arr1, arr2);
        if (playerArray.length === chainEvents.length) {
            checkWin();
        };
    });
}

// function: start new round

let newRound = function(arr1, arr2, time) {
    console.log('New ROUND')
    addSimon(arr1);
    lightSimon(arr1, time);
    console.log("simon: ", arr1);

    playerAction(arr1, arr2, time);
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
            checkWin(arr1, arr2, time);
        }
        index++;
    } 
    console.log('check round now');
    return true;
}

let checkWin = function(arr1, arr2, time) {
    if (playerArray.length === chainEvents.length) {
            // update score
            playerScore = Number(playerScore) + Number(1);
            $('#score h3').text(playerScore);
            console.log("Score updated. Keep going!");

            arr2 = [];
            newRound(arr1, arr2, time);
                
    }
}