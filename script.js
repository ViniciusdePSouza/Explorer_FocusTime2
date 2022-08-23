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

let timerPause = 0

const forest = {
    card: document.querySelector('#card-forest'),
    slider: document.querySelector('#slider-forest')
}

const rain = {
    card: document.querySelector('#card-rain'),
    slider: document.querySelector('#slider-rain')
}

const firePlace = {
    card: document.querySelector('#card-fireplace'),
    slider: document.querySelector('#slider-fireplace')
}

const coffeShop = {
    card: document.querySelector('#card-coffee-shop'),
    slider: document.querySelector('#slider-coffee-shop')
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

        if (minutes <= 0 && seconds <= 0) {
            kitchenTimer.play()
            togglePlayPause()
            return
        }

        if (seconds <= 0) {
            seconds = 60

            --minutes
        }

        --seconds

        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        minutesDisplay.textContent = String(minutes).padStart(2, "0")

        countdown()
    }, 1000)
}

function resetTimer() {
    minutesDisplay.textContent = String(minutesSeted).padStart(2, "0")
    secondsDisplay.textContent = String(secondsSeted).padStart(2, "0")
}

function addTimer() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
    minutesSeted = minutesDisplay.textContent
    secondsSeted = 0
}

function decreaseTimer() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    minutesSeted = minutesDisplay.textContent
    
    if(minutesSeted < 0) {
        alert('Não é possível diminuir mais o tempo')
        minutesDisplay.textContent = String(0).padStart(2, "0")
    }
    
    secondsSeted = 0
}

function togglePlayPause() {
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
}

function selectCard(card) {
    card.card.classList.toggle('card-selected')
    card.slider.classList.toggle('slider-selected')
}

function playBgAudio(card, audio) {
    if (card.card.classList.value.indexOf('card-selected') == -1) {
        audio.pause()
    } else {
        audio.play()
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

sunSwitch.addEventListener('click', function () {
    swtichIcons()
    toggleDarkTheme()
})


moonSwitch.addEventListener('click', function () {
    swtichIcons()
    toggleDarkTheme()
})

forest.card.addEventListener('click', function () {
    selectCard(forest)
    playBgAudio(forest, forestAudio)
})
rain.card.addEventListener('click', function () {
    selectCard(rain)
    playBgAudio(rain, rainningAudio)
})
coffeShop.card.addEventListener('click', function () {
    selectCard(coffeShop)
    playBgAudio(coffeShop, coffeShopAudio)
})

firePlace.card.addEventListener('click', function () {
    selectCard(firePlace)
    playBgAudio(firePlace, firePlaceAudio)
})

playButton.addEventListener('click', function () {
    pressButtonAudio.play()
    togglePlayPause()
    countdown()
})

pauseButton.addEventListener('click', function () {
    pressButtonAudio.play()
    clearTimeout(timerPause)
    togglePlayPause()
})

stopButton.addEventListener('click', function () {
    pressButtonAudio.play()
    resetTimer()
})

addButton.addEventListener('click', function () {
    pressButtonAudio.play()
    addTimer()
})

decreaseButton.addEventListener('click', function () {
    pressButtonAudio.play()
    decreaseTimer()
})