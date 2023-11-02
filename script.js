const audio = document.getElementById("radio");

audio.addEventListener("play", () => {
    // Cuando se inicia la reproducción
    console.log("Reproduciendo...");
});

audio.addEventListener("pause", () => {
    // Cuando se pausa la reproducción
    console.log("Pausado.");
});

audio.addEventListener("ended", () => {
    // Cuando la reproducción termina
    console.log("Reproducción finalizada.");
});

audio.addEventListener("error", (e) => {
    // Cuando hay un error de reproducción
    console.error("Error de reproducción:", e);
});
