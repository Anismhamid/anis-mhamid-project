let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;

initializeHole()


hole.addEventListener('animationiteration', () => {

    let random = -((Math.random() * 600) + 200);

    hole.style.top = random + "px";

    counter++;
});


let startTheGame = setInterval(function () {
    let array = []
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
        array.push(counter)
        document.getElementById('score').innerText = `Score:${counter}`;
    }
    if (array[0] == 30) {
        block.style.animation = 'block 4s linear infinite'
        hole.style.animation = 'block 4s linear infinite'


    } else if (array[0] == 60) {
        block.style.animation = 'block 3s linear infinite'
        hole.style.animation = 'block 3s linear infinite'

    }
    else if (array[0] == 100) {
        block.style.animation = 'block 2s linear infinite'
        hole.style.animation = 'block 2s linear infinite'
    }




    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockHiegth = parseInt(window.getComputedStyle(block).getPropertyValue("height"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(800 - characterTop);
    console.log(cTop);
    if ((characterTop >= blockHiegth -30) || ((blockLeft < 100) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 150)))) {
        alert("Game over. Score: " + (counter - 2));
        console.log(`charTop = ${characterTop}`);
        console.log(`blockHiegth + 50 = ${blockHiegth + 50}`);
        console.log(`blockLeft = ${blockLeft}`);
        console.log(`cTop = ${cTop} `);
        console.log(`cTop + 50 = ${cTop + 50},`);
        console.log(`holeTop + 200 = ${holeTop + 200} }`);

        document.getElementById('char-img').src = 'gameImages/bird3.png'
        character.style.top = 100 + "px";
        counter = 0;
        initializeHole()
    }
}, 10);


function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
            document.getElementById('char-img').src = 'gameImages/bird2.png'
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        if (jumpCount % 100 === 0) {
            document.getElementById('char-img').src = 'gameImages/bird3.png';
        }
        jumpCount++;
        return
    }, 10);
}


function initializeHole() {
    let random = -((Math.random() * 600) + 200);
    hole.style.top = random + "px";
}


