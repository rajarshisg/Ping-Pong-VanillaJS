let barOne = {
    x: 400,
    y: 0,
    elem: document.getElementById('bar-1')
}

let barTwo = {
    x: 400,
    y: 485,
    elem: document.getElementById('bar-2')
}

let ball = {
    x: 440,
    y: 465,
    radius: 10,
    elem: document.getElementById('ball')
};

let velocityX = 10;
let velocityY = -5;
let barOneScore = 0;
let barTwoScore = 0;
if (localStorage.getItem('PingPongMaxScore') === null) {
    localStorage.setItem('PingPongMaxScore', 0);
}
let maxScore = localStorage.getItem('PingPongMaxScore');
document.getElementById('max-score').innerText = `Highest Score: ${maxScore}`;

window.onload = function () {
    window.alert("Welcome to the Ping Pong Game! Press SPACE to Play/Pause!");
};

let moveBall = function () {

    ball.x += velocityX;
    ball.y += velocityY;

    if (ball.x + ball.radius >= 900) {
        velocityX = -velocityX;
    } else if (ball.y <= 15) {
        velocityY = -velocityY;
        if (ball.x < barTwo.x - ball.radius || ball.x + ball.radius > barOne.x + 100) {
            if (barOneScore > barTwoScore) {
                window.alert('Game ended! Player 1 won!');
                if(barOneScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }
            } else if(barOneScore === barTwoScore) {            
                window.alert('Game ended! It\'s a tie!');
                if(barOneScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }    
            }else {
                window.alert('Game ended! Player 2 won!');
                if(barTwoScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }
            }
            localStorage.setItem('PingPongMaxScore', Math.max(localStorage.getItem('PingPongMaxScore'), Math.max(barOneScore, barTwoScore)));
            location.reload();
        }

        barOneScore += 100;
        document.getElementById('player-one-score').innerText = `Player One: ${barOneScore}`;
    } else if (ball.x <= 0) {
        velocityX = -velocityX;
    } else if (ball.y + ball.radius >= 475) {
        velocityY = -velocityY;
        if (ball.x < barTwo.x - ball.radius || ball.x + ball.radius > barTwo.x + 100) {
            if (barOneScore > barTwoScore) {
                window.alert('Game ended! Player 1 won!');
                if(barOneScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }
            } else if(barOneScore === barTwoScore) {
                window.alert('Game ended! It\'s a tie!');
                if(barOneScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }
            } else {
                window.alert('Game ended! Player 2 won!');
                if(barTwoScore > maxScore) {
                    window.alert('Congrats! New Highest Score Achieved!');
                }
            }
            localStorage.setItem('PingPongMaxScore', Math.max(localStorage.getItem('PingPongMaxScore'), Math.max(barOneScore, barTwoScore)));
            location.reload();
        }
        barTwoScore += 100;
        document.getElementById('player-two-score').innerText = `Player Two: ${barTwoScore}`;
    }

    ball.elem.style.marginLeft = ball.x + 'px';
    ball.elem.style.marginTop = ball.y + 'px';
}

let spaceBarPressed = 0, interval;
window.addEventListener('keydown', function (event) {
    if (event.key == ' ') {

        if (spaceBarPressed % 2 === 0) {
            interval = setInterval(moveBall, 30);
        } else {
            window.alert("Game Paused!");
            clearInterval(interval);
        }

        spaceBarPressed++;
    }
    if (event.key == "ArrowLeft") {
        barOne.x = (barOne.x - 15 < 0) ? 0 : barOne.x - 15;
        barTwo.x = (barTwo.x - 15 < 0) ? 0 : barTwo.x - 15;
        barOne.elem.style.marginLeft = barOne.x + 'px';
        barTwo.elem.style.marginLeft = barTwo.x + 'px';
        console.log(barOne.elem.style.marginLeft);
    }
    if (event.key == "ArrowRight") {
        barOne.x = (barOne.x + 15 > 750) ? 750 : barOne.x + 15;
        barTwo.x = (barTwo.x + 15 > 750) ? 750 : barTwo.x + 15;
        barOne.elem.style.marginLeft = barOne.x + 'px';
        barTwo.elem.style.marginLeft = barTwo.x + 'px';
    }
});
