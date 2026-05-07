// MENSAJE PROYECTO PEC
function mostrarmensaje() {

    let mensaje = document.getElementById("mensaje");

    // SI ESTÁ OCULTO
    if (mensaje.style.display === "none" || mensaje.style.display === "") {

        mensaje.innerHTML = "Cuida y protege a tus mascotas";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

    } else {

        // OCULTAR
        mensaje.style.opacity = "0";

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 300);
    }
}


// MENSAJE SOBRE MÍ
function mostrarmensaje2() {

    let mensaje = document.getElementById("mensaje2");

    // SI ESTÁ OCULTO
    if (mensaje.style.display === "none" || mensaje.style.display === "") {

        mensaje.innerHTML = "¡Chismosooooooooo!";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

    } else {

        // OCULTAR
        mensaje.style.opacity = "0";

        setTimeout(() => {
            mensaje.style.display = "none";
        }, 300);
    }
}


// MODO OSCURO
const toggle = document.getElementById("toggleDark");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});




// ACORDEÓN FAQ

const acordeonBtns = document.querySelectorAll(".acordeon-btn");

acordeonBtns.forEach((boton) => {

    boton.addEventListener("click", () => {

        const contenido = boton.nextElementSibling;

        // ABRIR O CERRAR
        if (contenido.style.maxHeight) {

            contenido.style.maxHeight = null;

        } else {

            contenido.style.maxHeight =
                contenido.scrollHeight + "px";
        }
    });
});





// CENTRO INTERACTIVO

function mostrarContenido(id) {

    // OCULTAR TODOS
    const contenidos =
        document.querySelectorAll(".contenido-interactivo");

    contenidos.forEach((contenido) => {
        contenido.classList.remove("activo");
    });

    // MOSTRAR EL SELECCIONADO
    document.getElementById(id)
        .classList.add("activo");
}