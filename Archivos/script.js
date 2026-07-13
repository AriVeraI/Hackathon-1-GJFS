document.addEventListener("DOMContentLoaded", () => {
    cargarAcercaDeNosotros();
});
/**
 * Inyecta de forma asíncrona el contenido de acerca-de-nosotros.html en el contenedor #acerca-de-nosotros
 */
async function cargarAcercaDeNosotros() {
    const contenedorAcerca = document.getElementById("acerca-de-nosotros");
    
    if (!contenedorAcerca) {
        console.warn("No se encontró el contenedor con el ID 'acerca-de-nosotros'.");
        return;
    }
    try {
        const respuesta = await fetch("acerca-de-nosotros.html");
        
        if (!respuesta.ok) {
            throw new Error(`Error al cargar el menú: ${respuesta.status} ${respuesta.statusText}`);
        }
        
        const html = await respuesta.text();
        contenedorAcerca.innerHTML = html;
        
    } catch (error) {
        console.error("Hubo un problema al cargar el archivo de navegación:", error);
        contenedorAcerca.innerHTML = `<div class="alert alert-danger m-3">Error al cargar la navegación.</div>`;
    }
}