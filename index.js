window.addEventListener('load',() => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('pads div');

    //make sound
    pads.forEach(pad =>{
        pad.addEventListener('click', function(){
           sounds[4] 
        });
    });
});

console.log(sounds);