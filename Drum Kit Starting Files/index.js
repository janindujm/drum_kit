var numberOfDrums = document.querySelectorAll(".drum").length;

for (let index = 0; index < numberOfDrums; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",sound);


}

function sound(){
    var sound_src = "sounds/crash.mp3";
    var audio = new Audio(sound_src);
    audio.play();
}