const sunSwitch = document.querySelector('.sun-switch')
const moonSwitch = document.querySelector('.moon-switch')
const timerContainer = document.querySelector('.timer-container')
const body = document.querySelector('.whole-body')

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const addButton = document.querySelector('.add')
const decreaseButton = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('#miniutes')
const secondsDisplay = document.querySelector('#seconds')
let minutesSeted = 25
let secondsSeted = 0

let timerPause

const forest = {
    card:  document.querySelector('#card1'),
    slider: document.querySelector('#slider1')

}

const rain = {
    card: document.querySelector('#card2'),
    slider: document.querySelector('#slider2')
}

const firePlace = {
    card: document.querySelector('#card4'),
    slider: document.querySelector('#slider4')
}

const coffeShop = {
    card: document.querySelector('#card3'),
    slider: document.querySelector('#slider3')
}

const forestAudio = new Audio('./sounds/Floresta.wav')
const rainningAudio = new Audio('./sounds/Chuva.wav')
const coffeShopAudio = new Audio('./sounds/Cafeteria.wav')
const firePlaceAudio = new Audio('./sounds/Lareira.wav')
const kitchenTimer = new Audio('./sounds/KitchenTimer.mp3')
const pressButtonAudio = new Audio('./sounds/ButtonPress.wav')

forestAudio.loop = true
rainningAudio.loop = true
coffeShopAudio.loop = true
firePlaceAudio.loop = true

function countdown() {
    timerPause = setTimeout(function () {
        seconds = Number(secondsDisplay.textContent)
        minutes = Number(minutesDisplay.textContent)
        
        
        if(minutes <= 0 && seconds <= 0){
            kitchenTimer.play()
            togglePlayPause()
            return
        }
        
        if(seconds <= 0){
            seconds = 60
            
            --minutes
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2,"0")
        minutesDisplay.textContent = String(minutes).padStart(2,"0")


        countdown()
    }, 1000)
}

function resetTimer(){
    minutesDisplay.textContent =  String(minutesSeted).padStart(2,"0")
    secondsDisplay.textContent = String(secondsSeted).padStart(2,"0")
}

function addTimer() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2,"0")
    minutesSeted = minutesDisplay.textContent
    secondsSeted = 0
}

function decreaseTimer() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2,"0")
    minutesSeted = minutesDisplay.textContent
    secondsSeted = 0
}

function togglePlayPause() {
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
}

function selectCard1() {
    card1.classList.toggle('card-selected')
    slider1.classList.toggle('slider-selected')

    if(card1.classList.value.indexOf('card-selected') == -1) {
        forestAudio.pause()
    } else {
        forestAudio.play()
    }
}

function selectCard2() {
    rain.card.classList.toggle('card-selected')
    rain.slider.classList.toggle('slider-selected')

    if(rain.card.classList.value.indexOf('card-selected') == -1) {
        rainningAudio.pause()
    } else {
        rainningAudio.play()
    }
}
function selectCard3() {
    coffeShop.card.classList.toggle('card-selected')
    coffeShop.slider.classList.toggle('slider-selected')

    if(coffeShop.card.classList.value.indexOf('card-selected') == -1) {
        coffeShopAudio.pause()
    } else {
        coffeShopAudio.play()
    }
}
function selectCard4() {
    firePlace.card.classList.toggle('card-selected')
    firePlace.slider.classList.toggle('slider-selected')

    if(firePlace.card.classList.value.indexOf('card-selected') == -1) {
        firePlaceAudio.pause()
    } else {
        firePlaceAudio.play()
    }
}


function swtichIcons() {
    sunSwitch.classList.toggle('hide')
    moonSwitch.classList.toggle('hide')
}

function toggleDarkTheme() {
    timerContainer.classList.toggle('dark-theme')
    body.classList.toggle('dark-body')
}

sunSwitch.addEventListener('click', function(){
    swtichIcons()
    toggleDarkTheme()
})


moonSwitch.addEventListener('click', function(){
    swtichIcons()
    toggleDarkTheme()
})

card1.addEventListener('click', function(){
    selectCard1()
})
card2.addEventListener('click', function(){
    selectCard2()
})
card3.addEventListener('click', function(){
    selectCard3()
})

firePlace.card.addEventListener('click', function(){
    selectCard4()
})

playButton.addEventListener('click', function(){
    pressButtonAudio.play()
    togglePlayPause()
    countdown()
})

pauseButton.addEventListener('click', function(){
    pressButtonAudio.play()
    clearTimeout(timerPause)
    togglePlayPause()
})

stopButton.addEventListener('click', function(){
    pressButtonAudio.play()
    resetTimer()
})

addButton.addEventListener('click', function(){
    pressButtonAudio.play()
    addTimer()
})

decreaseButton.addEventListener('click', function(){
    pressButtonAudio.play()
    decreaseTimer()
})