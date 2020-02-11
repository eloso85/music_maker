window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ]
    console.log(sounds)
    //make sound
    pads.forEach((pad, index) => { //adding parathenis on pad gives acces to index
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0; //set play time to 0 everytime i press
            sounds[index].play();

            createBubbles(index);
        });
    });
    // create function that makes bubules.
    const createBubbles = (index) =>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"; 
    }
});

