const sunSwitch = document.querySelector('.sun-switch')
const moonSwitch = document.querySelector('.moon-switch')
const timerContainer = document.querySelector('.timer-container')
const body = document.querySelector('.whole-body')

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