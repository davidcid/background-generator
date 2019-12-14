const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const angle = document.querySelector(".angle");
const body = document.querySelector("#gradient");
const angleButton = document.querySelector('.angleButton');
let playing = false;
let animatedAngle;

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);
angle.addEventListener("input", setBackground);
angleButton.addEventListener("click",toggleAnimation);

setBackground();

function toggleAnimation() {
    if (!playing) {
        animatedAngle = setInterval(() => {
            angle.value++;
            if (angle.value > 360) {
                angle.value = 0;
            }
            setBackground();
        }, 50);
        playing = true;
        angleButton.textContent = "Stop";
    } else {
        playing = false;
        clearInterval(animatedAngle);
        angleButton.textContent = "Play";
    }
}

function setBackground() {
    body.style.background = 
    `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + ";";
}

const test = () => { console.log(2+1)};