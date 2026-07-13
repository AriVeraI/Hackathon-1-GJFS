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