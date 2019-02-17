// one sheet of all the functions that will be called during game play

 // function: add to chain of events array by random number generator (1-4), each number represents a color
let addSimon = function(arr) {
    let nextLight = ((Math.floor(Math.random() * 4) + 1));
    arr.push(nextLight);
    console.log(arr);
}

// function: Simon actions (light & tone i for time)
let lightSimon = function(arr, time) {
    for (let i = 0; i < arr.length; i++) { 
        switch (arr[i]) {
            case 1:
                $('.greenButton').toggleClass('bright'); 
                $('#lightsaber')[0].play();
                setTimeout(function() { 
                    $('.greenButton').toggleClass('bright'); 
                    $('#lightsaber')[0].pause(); 
                }, time);
                break;
            case 2:
                $('.redButton').toggleClass('bright');
                $('#lasers')[0].play();
                setTimeout(function() { 
                    $('.redButton').toggleClass('bright'); 
                    $('#lasers')[0].pause(); 
                }, time);
                break;
            case 3:
                $('.yellowButton').toggleClass('bright');
                $('#chewie')[0].play();
                setTimeout(function() { 
                    $('.yellowButton').toggleClass('bright');
                    $('#chewie')[0].pause(); 
                }, time);
                break;
            case 4:
                $('.blueButton').toggleClass('bright');
                $('#r2d2')[0].play();
                setTimeout(function() { 
                    $('.blueButton').toggleClass('bright');
                    $('#r2d2')[0].pause(); 
                }, time);
                break;
        }
    }
}



// function: take player actions and input to an array that can be compared to chain of events
// $('.gameboard div').click(function() {
//     $(this).toggleClass('bright');
//     $(this 'audio')[0].play();
//     setTimeout(function() { 
//         $(this).toggleClass('bright');
//         $(this 'audio')[0].pause(); 
//     }, time);
// })

// function: compare player's action to the chain of events created by Simon
let checkArray = function(arr1, arr2) {
    i = 0;
    while (i < arr1.length + 1) {
        // if playerArray === chainEvents, keep playing
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