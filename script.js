function makebubble() {
    var c = ""; 
    for (var i = 0; i < 78; i++) {
        var random = Math.floor(Math.random() * 10);
        c += `<div class="bubble">${random}</div>`;
    }
    var gol = document.getElementById("cont");
    gol.innerHTML = c;
}

var hitrn;
var score = 0;

makebubble();
runtimer();
getNewHit();

function runtimer() {
    var timer = 30;
    var duration = document.querySelector("#duration"); 
    
    var inter = setInterval(function () {
        if (timer > 0) {
            timer--;
            duration.textContent = timer;
        } else {
            clearInterval(inter);
            document.querySelector("#cont").innerHTML = document.querySelector("#cont").innerHTML = 
            `<h1 style="text-align:center; justify-content:center;">Game Over</h1>`;
            
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function incscore() {
    score += 10;
    document.getElementById("scorec").textContent = score;
}

document.querySelector("#cont").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    
    if (clickednum === hitrn) {
        incscore();
        makebubble();
        getNewHit();
    }
});
