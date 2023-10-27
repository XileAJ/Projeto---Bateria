document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    let composerSong = document.querySelector('#input').value;
    if(composerSong !== '') {
        let songArray = composerSong.split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement) {
        keyElement.classList.add('active');
        
        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 300);
    }

}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
       setTimeout(()=> {
        playSound(`key${songItem}`);
       }, wait);

       wait += 250;
    }
}