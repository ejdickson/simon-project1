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
    console.log(arr1);
}

// function: Simon actions (light & tone i for time)
// const lightSimon = async (arr1, time) => {
//     await asyncForEach(arr1, async ())

//     console.log(arr1)
// }
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

let playerAction = function(arr2, time) {
    $('.greenButton').click(function() {
        lightGreen(time);
        arr2.push(1);
    });
    $('.redButton').click(function() {
        lightRed(time);
        arr2.push(2);
    });
    $('.yellowButton').click(function() {
        lightYellow(time);
        arr2.push(3);
    });
    $('.blueButton').click(function() {
        lightBlue(time);
        arr2.push(4);
    });
}


// function: compare player's action to the chain of events created by Simon
let checkArray = function(arr1, arr2) {
    i = 0;
    while (i < arr1.length + 1) {
        // if playerArray === chainEvents, keep going
        if ((arr2[i]) === (arr1[i])) {
            i++
        } else {
            //game over
            console.log("Game Over")
            return false
        }
    return true
    }
}