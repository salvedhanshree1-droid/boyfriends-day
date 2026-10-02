// ================================
// LOVE LETTER POPUP
// ================================

function openLetter() {
    const popup = document.getElementById("letter-popup");
    popup.classList.add("show");
}

function closeLetter() {
    const popup = document.getElementById("letter-popup");
    popup.classList.remove("show");
}


// ================================
// SURPRISE MESSAGE
// ================================

function showSurprise() {
    const message = document.getElementById("surprise-message");

    message.classList.toggle("show");

    if (message.classList.contains("show")) {
        createHeartBurst();
    }
}


// ================================
// FLOATING HEARTS
// ================================

function createFloatingHeart() {

    const heartsContainer = document.querySelector(".hearts");

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const symbols = ["♡", "♥", "❤", "💕", "💗"];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.animationDelay =
        Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


// Create hearts regularly

setInterval(createFloatingHeart, 700);


// ================================
// HEART BURST
// ================================

function createHeartBurst() {

    const heartsContainer = document.querySelector(".hearts");

    if (!heartsContainer) return;

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "♥";

        heart.style.left = (40 + Math.random() * 20) + "%";

        heart.style.bottom = "35%";

        heart.style.fontSize =
            (15 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


// ================================
// CLOSE POPUP WHEN CLICKING OUTSIDE
// ================================

document.addEventListener("click", function (event) {

    const popup = document.getElementById("letter-popup");

    if (
        event.target === popup
    ) {
        closeLetter();
    }

});


// ================================
// ESC KEY CLOSES POPUP
// ================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLetter();
    }

});
// ================================
// MUSIC PLAYER
// ================================

function toggleMusic() {

    const song = document.getElementById("our-song");
    const button = document.getElementById("music-button");

    if (song.paused) {

        song.play();

        button.innerHTML = "❚❚";

    } else {

        song.pause();

        button.innerHTML = "▶";

    }
}


// Reset button when song finishes

document.addEventListener("DOMContentLoaded", function () {

    const song = document.getElementById("our-song");
    const button = document.getElementById("music-button");

    if (song) {

        song.addEventListener("ended", function () {

            button.innerHTML = "▶";

        });

    }

});
// FINAL SURPRISE
function showFinalMessage() {
    const message = document.getElementById("final-message");

    message.classList.add("show");

    // BIG HEART BURST ❤️
    const heartsContainer = document.querySelector(".hearts");

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = ["❤️", "💗", "💕", "💖", "💘", "💞"][
            Math.floor(Math.random() * 6)
        ];

        heart.style.position = "fixed";
        heart.style.left = (10 + Math.random() * 80) + "%";
        heart.style.bottom = (15 + Math.random() * 35) + "%";
        heart.style.fontSize = (18 + Math.random() * 25) + "px";
        heart.style.animationDuration = (2 + Math.random() * 3) + "s";
        heart.style.animationDelay = (Math.random() * 0.8) + "s";
        heart.style.zIndex = "999";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
// CLICK TO REVEAL MEMORY PHOTOS

document.addEventListener("DOMContentLoaded", function () {

    const photoBoxes = document.querySelectorAll(".photo-box");

    photoBoxes.forEach(function (photo) {

        photo.addEventListener("click", function () {

            photo.classList.toggle("open");

            if (photo.classList.contains("open")) {
                createHeartBurst();
            }

        });

    });

});