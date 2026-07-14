document.addEventListener("DOMContentLoaded", () => {
    cargarServiciosTestimonios();
});

async function cargarServiciosTestimonios() {

    const contenedorServicios = document.getElementById("servicios");

    if (!contenedorServicios) {
        console.warn("No se encontró el contenedor con el ID 'servicios'.");
        return;
    }

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


let carrito = [];

function agregarCarrito(producto){

    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    document.getElementById("contadorCarrito").innerHTML = carrito.length;

}

