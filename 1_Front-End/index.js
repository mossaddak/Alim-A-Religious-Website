window.addEventListener('scroll', function () {
    let navbar = document.querySelector("nav");
    let home_link = document.querySelector(".home_link");
    let donate_link = document.querySelector(".donate_link");
    let event_link = document.querySelector(".event_link");
    let scolar_link = document.querySelector(".scolar_link");
    let tilawat_link = document.querySelector(".tilawat_link");
    let feature_link = document.querySelector(".feature_link");
    let contact_link = document.querySelector(".contact_link");

    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
        home_link.classList.add('sticky_nav_link');
        donate_link.classList.add('sticky_nav_link');
        event_link.classList.add('sticky_nav_link');
        scolar_link.classList.add('sticky_nav_link');
        tilawat_link.classList.add('sticky_nav_link');
        feature_link.classList.add('sticky_nav_link');
        contact_link.classList.add('sticky_nav_link');

    } else {
        navbar.classList.remove('sticky');
        home_link.classList.remove('sticky_nav_link');
        donate_link.classList.remove('sticky_nav_link');
        event_link.classList.remove('sticky_nav_link');
        scolar_link.classList.remove('sticky_nav_link');
        tilawat_link.classList.remove('sticky_nav_link');
        feature_link.classList.remove('sticky_nav_link');
        contact_link.classList.remove('sticky_nav_link');
    }
});

var audio = document.getElementById("audio");
let playBTN = document.getElementById("play");
let pauseBTN = document.getElementById("pause");
var count = 0;


function playAudio() {
    playBTN.classList.add('playPAUSE_btn_color');
    pauseBTN.classList.remove('playPAUSE_btn_color');
    audio.play();
  
}

function pauseAudio() { 
    pauseBTN.classList.add('playPAUSE_btn_color');
    playBTN.classList.remove('playPAUSE_btn_color');
    audio.pause();
}

function FIVEsecondFORWORD(){
    var player = document.getElementById('audio');
    player.currentTime += 5.0;
}

function FIVEsecondBACK(){
    var player = document.getElementById('audio');
    player.currentTime -= 5.0;
}

function reset(){
    audio.currentTime = 0;
}


function mute(){
    var audio_mute_unmuteBTN = document.getElementById('audio'); 
    audio_mute_unmuteBTN.muted = !audio_mute_unmuteBTN.muted;  

    if (audio.muted==true){
        document.querySelector(".fa-bell-slash").classList.add('playPAUSE_btn_color');
    }else{
        document.querySelector(".fa-bell-slash").classList.remove('playPAUSE_btn_color');
    }
    
}






