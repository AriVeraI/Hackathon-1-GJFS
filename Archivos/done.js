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