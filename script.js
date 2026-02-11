function nextLevel(level) {
    document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
    document.getElementById("level" + level).classList.add("active");
}

function selectFire(level) {
    let text = "";
    if (level < 3) text = "Uy... tibio 🥺";
    if (level === 3) text = "Eso ya se siente 😏🔥";
    if (level === 4) text = "Cuidado que me prendo 😳🔥🔥";
    if (level === 5) text = "INCENDIO TOTAL 🔥🔥🔥🔥🔥💘";
    document.getElementById("fireResult").innerText = text;
}

// BOTONES
document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {
        noBtn.addEventListener("mouseover", () => {
            noBtn.style.position = "absolute";
            noBtn.style.left = Math.random() * 80 + "%";
            noBtn.style.top = Math.random() * 80 + "%";
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            document.querySelectorAll(".level").forEach(l => l.classList.remove("active"));
            document.getElementById("finalScreen").classList.add("active");
            startExplosion();
        });
    }

});

// EXPLOSIÓN DE NOMBRES
function startExplosion() {
    const words = ["IRIS 💚", "YAM 💚", "RABANITO 💚", "MI AMOR 💚", "MI MUJER 💚"];

    for (let i = 0; i < 30; i++) {
        const text = document.createElement("div");
        text.classList.add("explosionText");
        text.innerText = words[Math.floor(Math.random() * words.length)];
        text.style.left = Math.random() * 100 + "vw";
        text.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(text);
        setTimeout(() => text.remove(), 2000);
    }
}

// BOTÓN FINAL ACEPTO
function ultimateAccept() {

    // Cambiar fondo a incendio
    document.body.classList.add("fireMode");

    // Texto OFICIAL gigante
    const official = document.createElement("div");
    official.classList.add("officialText");
    official.innerText = "OFICIAL 💚🔥";
    official.style.top = "40%";
    official.style.left = "50%";
    official.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(official);

    startExplosion();

    setTimeout(() => official.remove(), 3000);
}

// BOTÓN MUAK
function muakMode() {

    const message = document.createElement("div");
    message.classList.add("muakMessage");
    message.innerText = "El domingo me como tu desa, pelón pelón como siempre 😏🔥";

    document.body.appendChild(message);

    startExplosion();

    setTimeout(() => {
        message.remove();
    }, 3000);
}
