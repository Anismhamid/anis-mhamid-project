let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let score = document.getElementById("score");
let char_img = document.querySelector("#char-img");
char_img.src = "./gameImages/pi5rnAbbT.gif";

let jumping = 0;
var counter = 0;

initializeHole();

hole.addEventListener("animationiteration", (e) => {
	let random = -(Math.random() * 600 + 200);
	hole.style.top = random + "px";
	if (random) {
		char_img.src = "./gameImages/pi5rnAbbT.gif";
		counter++;
	}
});

let startTheGame = setInterval(function () {
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	if (jumping == 0) {
		character.style.top = characterTop + 3 + "px";
	}

	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	let blockHiegth = parseInt(window.getComputedStyle(block).getPropertyValue("height"));
	let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
	let cTop = -(800 - characterTop);
	if (
		characterTop >= blockHiegth - 50 ||
		(blockLeft < 150 && blockLeft > -50 && (cTop < holeTop || cTop > holeTop + 150))
	) {
		char_img.src = "./gameImages//aniss.png";
		character.style.top = 100 + "px";
		alert(`Game over. Score ${counter}`);
		score.textContent = "Score:" + counter;
		counter = 0;
	} else {
		score.textContent = `Score: ${counter}`;
	}
}, 10);

function jump() {
	let jumpCount = 0;
	jumping = 1;
	let jumpInterval = setInterval(function () {
		let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
		if (characterTop > 6 && jumpCount < 15) {
			character.style.top = characterTop - 5 + "px";
		}
		if (jumpCount > 20) {
			clearInterval(jumpInterval);
			jumping = 0;
			jumpCount = 0;
		}
		jumpCount++;
	}, 10);
}

function initializeHole() {
	let random = -(Math.random() * 600 + 200);
	hole.style.top = random + "px";
}
