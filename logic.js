const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft =document.getElementById('time-left')
const scores =document.querySelector('#score')

let result = 0;
let hitPosition ;
let CurrentTime =60;
let timerId = null

function randomSquare () {
    squares.forEach(square => {
        square.classList.remove('mole')
    }) 

let randomSquare =  squares[Math.floor(Math.random()* 9)]
randomSquare.classList.add('mole')

hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown' ,() =>  {
        if(square.id == hitPosition) {
            result++;
            console.log(result)
            scores.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole()
{
    timerId = setInterval(randomSquare,700)
}

moveMole()

function countDown (){
 CurrentTime--;
 timeLeft.textContent = CurrentTime
 if(CurrentTime == 0)
 {
     clearInterval(countDownTimerId);
     clearInterval(timerId)
     alert('GAME OVER !! Your score is  '+result)
 }
}

let countDownTimerId = setInterval(countDown,700)