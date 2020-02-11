window.addEventListener('load',() => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual")

    console.log(sounds)
    //make sound
    pads.forEach((pad, index) => { //adding parathenis on pad gives acces to index
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; //set play time to 0 everytime i press
           sounds[index].play();
        });
    });
});

