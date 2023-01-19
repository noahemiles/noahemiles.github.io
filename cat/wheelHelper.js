let theWheel = new Winwheel({
    'canvasId': 'myCanvas',
    'numSegments': 0,
    'pointerAngle': 90,
    'lineWidth': 4,
    'textAlignment': 'outer',
    'textFontFamily': 'Butcherman, Cursive',
    'textMargin': 5,
    'outerRadius': 200,
    'centerY': 250,
    'rotationAngle': -45,
    'animation':                   // Note animation properties passed in constructor parameters.
    {
        'type': 'spinToStop',  // Type of animation.
        'duration': 7,             // How long the animation is to take in seconds.
        'spins': 50,              // The number of complete 360 degree rotations the wheel is to do.
        'callbackFinished': 'finished()'
    },
    'pointerGuide':        // Turn pointer guide on.
    {
        'display': false,
        'strokeStyle': 'red',
        'lineWidth': 3
    }
});

function finished() {
    stopSound();
    alertPrize();
    return;
}

let audio = new Audio('Twilight-zone-song.mp3');  // Create audio object and load desired file.

// Function called by the Spin button onClick.
function startSpin() {
    // Play the sound and begin the animation of the wheel.
    audio.play();
    theWheel.startAnimation();
}

// Called when the animation has finished.
function stopSound() {
    // Stop and rewind the sound (stops it if still playing).
    audio.pause();
    audio.currentTime = 0;
}

let canvas = document.getElementById('myCanvas');
// Specify click handler for canvas.
canvas.onclick = function (e) {
    // Call the getSegmentAt function passing the mouse x and y from the event.
    let clickedSegment = theWheel.getSegmentAt(e.clientX, e.clientY);

    // A pointer to the segment clicked is returned if the user clicked inside the wheel.
    if (clickedSegment) {
        // Change background colour of the segment and update the wheel.
        clickedSegment.text = document.getElementById('new-stu').value;
        document.getElementById('new-stu').value = "";
        document.getElementById('new-stu').focus();
        theWheel.draw();
    }
}

// This function called after the spin animation has stopped.
function alertPrize() {
    // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
    let winningSegment = theWheel.getIndicatedSegment();

    // Basic alert of the segment text which is the prize name.
    alert("You are the chosen one, " + winningSegment.text + "!");
    theWheel.rotationAngle = 0;
    theWheel.draw();
}


document.getElementById('new-stu').onkeypress = function (e) {
    if (!e) e = window.event;
    if (e.keyCode == '13') {
        addSegment();
        return false;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return hex_is_light(color) ? color : getRandomColor();
}

function hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

function addSegment() {
    // The Second parameter in the call to addSegment specifies the position,
    // in this case 1 meaning the new segment goes at the start of the wheel.
    theWheel.addSegment({
        'text': document.getElementById('new-stu').value,
        'fillStyle': getRandomColor()
    });
    document.getElementById('new-stu').value = "";
    document.getElementById('new-stu').focus();
    // The draw method of the wheel object must be called in order for the changes
    // to be rendered.
    theWheel.draw();
}

function deleteSegment() {
    // Call function to remove a segment from the wheel, by default the last one will be
    // removed; you can pass in the number of the segment to delete if desired.
    theWheel.deleteSegment();

    // The draw method of the wheel object must be called to render the changes.
    theWheel.draw();
}