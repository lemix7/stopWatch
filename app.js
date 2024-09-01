let time = document.querySelector('.time')

let [seconds,minutes,hours] = [0,0,0] // array destructuring

let pause = document.querySelector('.pause')
let play = document.querySelector('.play')
let replay = document.querySelector('.replay')

let title = document.querySelector('.title')

let timer = null

function stopWatch() {
    seconds++
    if(seconds === 60){
        seconds = 0
        minutes++
        if(minutes === 60){
            minutes = 0
            hours++
        }
    }

    let h = hours < 10 ? '0' + hours : hours // if hours less than 10 add 0 and hours else hours only
    let m = minutes < 10 ? '0' + minutes :minutes
    let s = seconds < 10 ? '0' + seconds :seconds

    time.textContent =`${h}:${m}:${s}`
}

function timerStart() {

    if(timer !== null){ // this will prevent the running of more than one timer by stoping one if the a timer is already running
        clearInterval(timer)
    }
    
  timer = setInterval(stopWatch,1000) // run stopwatch every one second
    title.textContent = 'Running'

    document.body.style.background = "linear-gradient(90deg, #d53369 0%, #daae51 100%)";
}

play.addEventListener('click',timerStart)

pause.addEventListener('click',() => {
    clearInterval(timer)
    title.textContent = 'Stopwatch'
    title.classList.toggle('run')
})

replay.addEventListener('click' , () => {
    clearInterval(timer)

    seconds = 0
    minutes = 0
    hours = 0

    time.textContent =`${hours}:${minutes}:${seconds}`
    time.textContent = `00:00:00`

    title.textContent = 'Stopwatch'
    title.classList.toggle('run')
})

