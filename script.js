let isMusicPlaying = false;
let isInvitationOpen = false;

const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Función para abrir la invitación
function openInvitation() {
    if (isInvitationOpen) return;

    isInvitationOpen = true;

    const portada = document.getElementById("portada-wrapper");
    const content = document.getElementById("invitation-content");

    portada.classList.add("open");

    setTimeout(() => {
        content.style.display = "block";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 600);

    setTimeout(() => {
        toggleMusic();
    }, 1000);
}

// Función para controlar la música
function toggleMusic() {
    if (isMusicPlaying) {
        audio.pause();
        musicBtn.innerText = "🎵";
        isMusicPlaying = false;
    } else {
        audio.play().catch(() => {
            console.log("Bloqueo de reproducción automática.");
        });

        musicBtn.innerText = "🔇";
        isMusicPlaying = true;
    }
}

const images = document.querySelectorAll(".carousel-image");
let currentImage = 0;

function changeImage() {
    images[currentImage].classList.remove("active");

    currentImage = (currentImage + 1) % images.length;

    images[currentImage].classList.add("active");
}

setInterval(changeImage, 3000);