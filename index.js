function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return //stops function from running - it will only run if there is a corresponding audio file
    audio.currentTime = 0 //will take you back to the start of the audio file
    audio.play()
    key.classList.add('playing')
    // console.log(key)
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return
    // console.log(e.propertyName)
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)