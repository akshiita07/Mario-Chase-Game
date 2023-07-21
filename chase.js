//ADD MUSIC
bgMusic = new Audio('backg.mp3');
deadMario = new Audio('death.mp3');



//GET KEY CODES 
//whener a key is pushed down
document.onkeydown = function (e) {
    console.log("The key code is: " + e.code)

    

    //KEY TO JUMP
    if (e.code == 'ArrowUp') {
        bgMusic.play()
        let mario = document.querySelector('.mario');
        mario.classList.add('animateMario');

        setTimeout(() => {
            mario.classList.remove('animateMario');
        }, 800)
    }

    //KEY TO MOVE LEFT
    else if (e.code == 'ArrowRight') {
        let mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 100 + "px";
        //moving right so inc in left ------->

        if (mario.style.transform = ("scaleX(-1)")) {
            mario.style.transform = ("scaleX(1)");
        }
    }


    //KEY TO MOVE RIGHT
    else if (e.code == 'ArrowLeft') {
        let mario = document.querySelector('.mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX - 100 + "px";
        mario.style.transform = ("scaleX(-1)");
        //moving right so inc in left ------->
    }

}

//for score
let cross = true;
let score = 0;
function updateScore(score) {

    let gameScore = document.querySelector('.game-score');
    gameScore.innerHTML = "Score: " + score;
}

//CHECK COLLISION
setInterval(() => {
    let mario = document.querySelector('.mario');
    let dragon = document.querySelector('.dragon');
    let overGame = document.querySelector('.game-over');

    mx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    // console.log("mx: my: "+mx+" wow" +my) 12 341
    // console.log("dx: dy: "+dx+" wow" +dy) 192 399

    offsetX = Math.abs(mx - dx);
    offsetY = Math.abs(my - dy);
    // console.log("offset x is: "+ offsetX+ "offset y is: "+ offsetY)
    // 192 26 101

    if (offsetX < 130 && offsetY < 20) {
        overGame.innerHTML = "Game Over";
        overGame.style.fontFamily = 'Tektur';
        overGame.style.fontSize = '2.5rem';
        dragon.classList.remove('animateDragon');
        let mario = document.querySelector('.mario');
        mario.classList.add('marioDead');
        bgMusic.pause()

        setTimeout(() => {
            deadMario.play();
            
        }, 100);


    }

    //ADD SCORE
    else if (offsetX < 160 && cross) {
        score = score + 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000)
        //INC SPEED WHILE INC SCORE

        setTimeout(() => {
            animDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));

            newDur = animDur - 0.01;
            dragon.style.animationDuration = newDur + "s";
        }, 1000)

        if(score>=8){
            let welldone = document.querySelector('.text');
            welldone.innerHTML="Well Playing! "
            
        }
    }


}, 10)







