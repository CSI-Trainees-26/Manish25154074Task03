let player=document.querySelector(".player");
let moveX=100;
var moveY=0;
document.addEventListener("keydown",function(move){
    if(move.key==="ArrowRight" || move.key==="d"){
        moveX+=20;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowLeft" || move.key==="a"){
        moveX-=20;
        player.style.left=`${moveX}px`;
    }
    else if(move.key==="ArrowUp" || move.key==="w"){
        moveY+=200;
        player.style.bottom=`${moveY}px`;
    }
});
document.addEventListener("keyup",function(relese){
    moveY=0;
    player.style.bottom=`${0}px`;
});

var playerImg=document.querySelector(".player img");
document.addEventListener("keydown",function(attack){
    if(attack.key===" " || attack.key==="ArrowDown"){
        playerImg.src="assets/Player/Attack/Attack_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_05.png";
        },400);

        setTimeout(function(){
            playerImg.src="assets/Player/Attack/Attack_06.png";
        },500);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },600);
        
    }
});

var playerImg=document.querySelector(".player img");
document.addEventListener("keydown",function(attack){
    if(attack.key==="d" || attack.key==="ArrowRight"){
        playerImg.src="assets/Player/_01.png";
        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_02.png";
        },100);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_03.png";
        },200);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_04.png";
        },300);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_05.png";
        },400);

        setTimeout(function(){
            playerImg.src="assets/Player/Jump/Jump_06.png";
        },500);
        setTimeout(function(){
            playerImg.src="assets/Player_Idle.svg";
        },600);
        
    }
});