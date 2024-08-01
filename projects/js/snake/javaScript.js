let foodEatCounter = 10;
let score = 0;
var snakeSpeed = 3
let snakeBody = [];
let snakeDirection = 'right';
let gameInterval;
let foodEl;
resetGame()

function gameSpeed() {
    snakeSpeed = +document.getElementById('gameSpeed').value;
}



function createFood() {
    if (!foodEl) {
        foodEl = document.createElement('div');
        foodEl.id = 'food';
        document.getElementById('dd').appendChild(foodEl);
    }

    let randomLeft = Math.floor(Math.random() * (460- 10) );
    let randomTop = Math.floor(Math.random() * (450 - 10) );

    foodEl.style.top = randomTop  + "px";
    foodEl.style.left = randomLeft + "px";
}


// Event listener for direction buttons
document.getElementById('topp').addEventListener('click', function () {
    changeDirection('up');
});

document.getElementById('leftt').addEventListener('click', function () {
    changeDirection('left');
});

document.getElementById('rightt').addEventListener('click', function () {
    changeDirection('right');
});

document.getElementById('bottomm').addEventListener('click', function () {
    changeDirection('down');
});

// Function to change snake direction
function changeDirection(direction) {
    // Update snakeDirection based on the button clicked
    switch (direction) {
        case 'up':
            if (snakeDirection !== 'down') { // Prevent reversing direction
                snakeDirection = 'up';
            }
            break;
        case 'down':
            if (snakeDirection !== 'up') {
                snakeDirection = 'down';
            }
            break;
        case 'left':
            if (snakeDirection !== 'right') {
                snakeDirection = 'left';
            }
            break;
        case 'right':
            if (snakeDirection !== 'left') {
                snakeDirection = 'right';
            }
            break;
    }
}

function moveSnake() {
    let snakeEl = document.getElementById('snake');
    let snakeTop = parseInt(snakeEl.style.top) || 0;
    let snakeLeft = parseInt(snakeEl.style.left) || 0;

    // Adjust snake position based on snakeDirection
    switch (snakeDirection) {
        case 'up':
            snakeTop -= snakeSpeed;
            break;
        case 'down':
            snakeTop += snakeSpeed;
            break;
        case 'left':
            snakeLeft -= snakeSpeed;
            break;
        case 'right':
            snakeLeft += snakeSpeed;
            break;
        default:
            //  button clicks (assuming 'topp', 'bottomm', 'leftt', 'rightt' are valid directions)
            if (snakeDirection === 'topp') {
                snakeTop -= snakeSpeed;
            } else if (snakeDirection === 'bottomm') {
                snakeTop += snakeSpeed;
            } else if (snakeDirection === 'leftt') {
                snakeLeft -= snakeSpeed;
            } else if (snakeDirection === 'rightt') {
                snakeLeft += snakeSpeed;
            }
            break;
    }

    // Update the snake's position on the screen
    snakeEl.style.top = snakeTop + 'px';
    snakeEl.style.left = snakeLeft + 'px';

    // Check collision with food
    if (isColliding(snakeEl, foodEl)) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('score2').innerText = --foodEatCounter;
        // Move food to a new random position
        let randomTop = Math.floor(Math.random() * (460 - 20) + 10);
        let randomLeft = Math.floor(Math.random() * (350 - 20) + 10);
        foodEl.style.top = randomTop + "px";
        foodEl.style.left = randomLeft + "px";

        // snake size (add an element to snakeBody)
        snakeBody.push({ top: snakeTop, left: snakeLeft });
    }

    // Move snake body parts
    moveSnakeBody();

    // Check for game over condition 
    checkGameOver();
}

function moveSnakeBody() {
    let snakeEl = document.getElementById('snake');
    let snakeTop = parseInt(snakeEl.style.top) || 0;
    let snakeLeft = parseInt(snakeEl.style.left) || 0;

    // Update snake body positions
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].top = snakeBody[i - 1].top;
        snakeBody[i].left = snakeBody[i - 1].left;
    }
    if (snakeBody.length > 0) {
        snakeBody[0].top = snakeTop;
        snakeBody[0].left = snakeLeft;
    }

    // Create new snake body parts
    let snakeBodyParts = document.querySelectorAll('.snake-body-part');
    snakeBodyParts.forEach(part => part.parentNode.removeChild(part));

    for (let i = 0; i < snakeBody.length; i++) {
        let snakeBodyPart = document.createElement('div');
        snakeBodyPart.className = 'snake-body-part';
        snakeBodyPart.style.top = snakeBody[i].top + 'px';
        snakeBodyPart.style.left = snakeBody[i].left + 'px';
        document.getElementById('dd').appendChild(snakeBodyPart);
    }
}

function isColliding(element1, element2) {
    let rect1 = element1.getBoundingClientRect();
    let rect2 = element2.getBoundingClientRect();
    return !(rect1.right < rect2.left || rect1.left > rect2.right ||
        rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

function checkGameOver() {
    let snakeEl = document.getElementById('snake');
    let snakeRect = snakeEl.getBoundingClientRect();

    if (foodEatCounter == 1) {
        foodEatCounter = 20;
    }


    let gameAreaRect = document.getElementById('dd').getBoundingClientRect();
    if (snakeRect.top < gameAreaRect.top ||
        snakeRect.bottom > gameAreaRect.bottom
    ) {
        clearInterval(gameInterval);
        alert('Game Over! Your score: ' + score);
        resetGame();
        return;
    } else if (
        snakeRect.right > gameAreaRect.right) {
        snakeEl.style.left = '0';
    } else if (snakeRect.left < gameAreaRect.left) {
        snakeEl.style.left = 320 + 'px';
    }
}

function resetGame() {
    score = 0;
    document.getElementById('score').innerText = score;

    let snakeBodyParts = document.querySelectorAll('.snake-body-part');
    snakeBodyParts.forEach(part => part.parentNode.removeChild(part));

    let snakeEl = document.getElementById('snake');
    snakeEl.style.top = '10px'; // Initial position
    snakeEl.style.left = '10px';
    snakeDirection = 'right';

    snakeBody = [];

    createFood();

    gameInterval = setInterval(moveSnake, 200 / snakeSpeed);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (snakeDirection !== 'down') {
                snakeDirection = 'up';
            }
            break;
        case 'ArrowDown':
            if (snakeDirection !== 'up') {
                snakeDirection = 'down';
            }
            break;
        case 'ArrowLeft':
            if (snakeDirection !== 'right') {
                snakeDirection = 'left';
            }
            break;
        case 'ArrowRight':
            if (snakeDirection !== 'left') {
                snakeDirection = 'right';
            }
            break;
    }
});

createFood();
gameInterval = setInterval(moveSnake, 100 / snakeSpeed);

