function mostrarmensaje () {
    let mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "cuida y proteje a tus mascotas";
mensaje.style.display = "block";

setTimeout(() => {
    mensaje.style.opacity = "1";
    mensaje.style.transfor = "translateY(0)";
},50);

}



function mostrarmensaje2 () {
    let mensaje = document.getElementById("mensaje2");

mensaje.innerHTML = "chismosooooooooo";
mensaje.style.display = "block";

setTimeout(() => {
    mensaje.style.opacity = "1";
    mensaje.style.transfor = "translateY(0)";
},50);

}



