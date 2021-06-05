const song = document.getElementById("song");
const playBtn = document.getElementById("play");
const title = document.querySelector(".mainTitle");
const singer = document.querySelector(".subTitle");
const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const songImage = document.querySelector("#image");


let isPlaying = false;

// Array of objects

const songs = [{
        name: "1.mp3",
        title1: "Cheap Thrills",
        artist: "Sia Furler",
        cover: "1.jpg"
    },
    {
        name: "2.mp3",
        title1: "Angry Bird",
        artist: "John Wilson",
        cover: "2.jpg"
    },
    {
        name: "3.mp3",
        title1: "O Brave",
        artist: "Albert Forge",
        cover: "3.jpg"
    }
];

function playMusic() {
    isPlaying = true;
    song.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    songImage.classList.add('anime');
}

function pauseMusic() {
    isPlaying = false;
    song.pause();
    playBtn.classList.replace('fa-pause', 'fa-play');
    songImage.classList.remove('anime');
}

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});


// Changing song title and artist name

function Play(songs) {
    title.textContent = songs.title1;
    singer.textContent = songs.artist;
    song.src = songs.name;
    songImage.src = songs.cover;
    playMusic();
}

let songCount = 0;

nextBtn.addEventListener('click', () => {
    if (songCount === 2) {
        songCount = -1;
    }
    Play(songs[++songCount]);
});


previousBtn.addEventListener("click", () => {
    --songCount;
    if (songCount === -1) {
        songCount = 2;
    }
    Play(songs[songCount]);
});