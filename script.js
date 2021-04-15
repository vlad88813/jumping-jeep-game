const jeep = document.getElementById("jeep");
const cactus = document.getElementById("cactus");
const id_number = document.getElementById("number");
var Score = 0;
id_number.innerHTML= Score

document.addEventListener("keydown", function (event){
    jump();
    Score++
    // console.log(Score)
    id_number.innerHTML= Score;
});

function jump () {
    if (jeep.classList != "jump"){
        jeep.classList.add("jump")
    }
    setTimeout ( function() {
        jeep.classList.remove("jump")
    },300)
}

let isAlive = setInterval(() => {
    let jeepTop = parseInt(window.getComputedStyle(jeep).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


    if  (cactusLeft < 50 && cactusLeft > 30 && jeepTop >= 140) {
        alert('game over!')
        Score = 0;
        id_number.innerHTML= Score
    }
}, 10);

