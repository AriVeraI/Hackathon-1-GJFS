document.addEventListener("DOMContentLoaded", () => {
    cargarServiciosTestimonios();
});

async function cargarServiciosTestimonios() {

    const contenedorServicios = document.getElementById("servicios");

    if (!contenedorServicios) {
        console.warn("No se encontró el contenedor con el ID 'servicios'.");

    try {

        const respuesta = await fetch("serviciostestimonios.html");

        if (!respuesta.ok) {
            throw new Error(`Error al cargar el archivo: ${respuesta.status} ${respuesta.statusText}`);
        }

        const html = await respuesta.text();
        contenedorServicios.innerHTML = html;

    } catch (error) {

        console.error(error);

        contenedorServicios.innerHTML = `
            <div class="alert alert-danger m-3">
                Error al cargar el archivo.
            </div>
        `;
    }
}
}


let carrito = [];

function agregarCarrito(producto){

    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    document.getElementById("contadorCarrito").innerHTML = carrito.length;

}


document.addEventListener("DOMContentLoaded", () => {
    cargarNavbar();
});
async function cargarNavbar() {
    const contenedorNavbar = document.getElementById("Navbar");
    
    if (!contenedorNavbar) {
        console.warn("No se encontró el contenedor con el ID 'Navbar'.");
        return;
    }

    try {
        const respuesta = await fetch("nav.html");
        
        if (!respuesta.ok) {
            throw new Error(`Error al cargar el menú: ${respuesta.status} ${respuesta.statusText}`);
        }
        
        const html = await respuesta.text();
        contenedorNavbar.innerHTML = html;
        
    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de navegación:", error);
        contenedorNavbar.innerHTML = `<div class="alert alert-danger m-3">Error al cargar la navegación.</div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarInicio();
});
async function cargarInicio() {
    const contenedorInicio = document.getElementById("inicio");
    
    if (!contenedorInicio) {
        console.warn("No se encontró el contenedor con el ID 'Inicio'.");
        return;
    }

    try {
        const respuesta = await fetch("inicio.html");
        
        if (!respuesta.ok) {
            throw new Error(`Error al cargar el menú: ${respuesta.status} ${respuesta.statusText}`);
        }
        
        const html = await respuesta.text();
        contenedorInicio.innerHTML = html;
        
    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de inicio:", error);
        contenedorInicio.innerHTML = `<div class="alert alert-danger m-3">Error al cargar el inicio.</div>`;
    }
}
async function cargarContacto() {
    const contenedorContacto = document.getElementById("contacto");

    if (!contenedorContacto) {
        console.warn("No se encontró el contenedor con el ID 'contacto'.");
        return;
    }

    try {
        const respuesta = await fetch("contacto.html");

        if (!respuesta.ok) {
            throw new Error(`Error al cargar la sección de contacto: ${respuesta.status} ${respuesta.statusText}`);
        }

        const html = await respuesta.text();
        contenedorContacto.innerHTML = html;

    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de contacto:", error);
        contenedorContacto.innerHTML = `<div class="alert alert-danger m-3">Error al cargar la sección de contacto.</div>`;
    }
}

// MÉTODO PARA CARGAR EL PRECIOS
document.addEventListener("DOMContentLoaded", () => {
    cargarPrecios();
});
async function cargarPrecios() {
    const contenedorPrecios = document.getElementById("precios");
    
    if (!contenedorPrecios) {
        console.warn("No se encontró el contenedor con el ID 'precios'.");
        return;
    }
    try {
        const respuesta = await fetch("precios.html");
        
        if (!respuesta.ok) {
            throw new Error(`Error al cargar el menú: ${respuesta.status} ${respuesta.statusText}`);
        }
        
        const html = await respuesta.text();
        contenedorPrecios.innerHTML = html;
        
    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de precios/planes:", error);
        contenedorNavbar.innerHTML = `<div class="alert alert-danger m-3">Error al cargar precios.</div>`;
    }
}


//FUNCIÓN PARA CARRUSEL DE LOS GIF

function inicializarComponenteInicio() {
    const elementoCarrusel = document.getElementById('carouselGifs');
    if (elementoCarrusel) {
        new bootstrap.Carousel(elementoCarrusel);
    }

    const fuentesGifs = [
        { 
            animado: "https://i.pinimg.com/originals/63/a9/dc/63a9dc4e70618d3521319080787ef994.gif", 
            estatico: "https://i.pinimg.com/originals/63/a9/dc/63a9dc4e70618d3521319080787ef994.gif" 
        },
        { 
            animado: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybjg2ZTIzYWt4aTl2Ynh3MGtxdXZzZHdhN2o5bDFkenRleG1ienI1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rJxtYAdhOnwAZlR5pW/200w.gif", 
            estatico: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY4B9jVE1n8vnskkcFY6graZhBUDhxQA1WLDvBt_y_Q&s" 
        }
    ];

    let carruselPausado = false;
    const btnPausa = document.getElementById("btn-pausa");
    const iconoPausa = document.getElementById("icono-pausa");
    const imagenesGifs = document.querySelectorAll(".item-gif");

    if (btnPausa) {
        btnPausa.addEventListener("click", () => {
            carruselPausado = !carruselPausado;
            
            if (carruselPausado) {
                iconoPausa.className = "bi bi-play-fill fs-5";
            } else {
                iconoPausa.className = "bi bi-pause-fill fs-5";
            }
            
            imagenesGifs.forEach((img) => {
                const index = img.getAttribute("data-index");
            if (carruselPausado) {
                iconoPausa.className = "bi bi-play-fill fs-5";
            } else {
                iconoPausa.className = "bi bi-stop-fill fs-5";
            }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarFooter();
});
/**
 * Inyecta de forma asíncrona el contenido de nav.html en el contenedor #Navbar
 */
async function cargarFooter() {
    const contenedorFooter = document.getElementById("footer");
    
    if (!contenedorFooter) {
        console.warn("No se encontró el contenedor con el ID 'footer'.");
        return;
    }
    try {
        const respuesta = await fetch("footer.html");
        
        if (!respuesta.ok) {
            throw new Error(`Error al cargar el menú: ${respuesta.status} ${respuesta.statusText}`);
        }
        
        const html = await respuesta.text();
        contenedorFooter.innerHTML = html;
        
    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de navegación:", error);
        contenedorFooter.innerHTML = `<div class="alert alert-danger m-3">Error al cargar la navegación.</div>`;
    }
}
