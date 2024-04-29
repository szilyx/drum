var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",klikkeles);
    var gombNev = this.innerHTML;
    switch (gombNev) {
        case 'w':
            function klikkeles(){
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            }
            break;
        default:
            break;
    }
}

function klikkeles(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}