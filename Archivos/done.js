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