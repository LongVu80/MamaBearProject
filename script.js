// function animateLines() {
//     var lineTop = document.getElementById("lineTop");
//     var lineBottom = document.getElementById("lineBottom");
//     var content = document.getElementById("content");

//     // Animate lines
//     lineTop.style.transform = "translateY(-200%)";
//     lineBottom.style.transform = "translateY(100%)";

//     // After animation, show content
//     setTimeout(function() {
//         content.style.display = "block";
//     }, 1000); // Adjust time according to your animation duration
// }

window.onload = function() {
    setTimeout(function() {
        document.getElementById('contentImage').classList.remove('hidden');
        // document.querySelector('.button-container').classList.remove('hidden');
    }, 1000); // Corresponds to the duration of the CSS animation
};



function showDiv(id) {
    var header = document.querySelector('.header');
    var divs = document.getElementsByClassName('content');

    // Fade out the header
    header.style.opacity = 0;

    // Hide all divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
        divs[i].style.opacity = 0;
    }

    // Show and fade in the active div
    var activeDiv = document.getElementById(id);
    setTimeout(function() {
        activeDiv.style.display = 'block';
        activeDiv.style.opacity = 1;
    }, 500); // Delay to allow header to fade out
}

function hideDivs() {
    var header = document.querySelector('.header');
    var divs = document.getElementsByClassName('content');

    // Hide all divs
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
        divs[i].style.opacity = 0;
    }

    // Fade in the header
    setTimeout(function() {
        header.style.opacity = 1;
    }, 500); // Delay to allow content to fade out
}
