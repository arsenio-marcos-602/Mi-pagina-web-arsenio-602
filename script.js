function mostrarmensaje () {
    let mensaje = document.getElementById("mensaje");

mensaje.innerHTML = "cuida y proteje a tus mascotas";
mensaje.style.display = "block";

setTimeout(() => {
    mensaje.style.opacity = "1";
    mensaje.style.transfor = "translateY(0)";
},50);

}


