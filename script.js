// MENSAJE PROYECTO PEC
function mostrarmensaje() {

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "Cuida y protege a tus mascotas";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}


// MENSAJE SOBRE MÍ
function mostrarmensaje2() {

    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "¡Chismosooooooooo!";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}


// MODO OSCURO
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});