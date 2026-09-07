# ⚡ Vexa — Tienda Deportiva (Landing Page)

Landing page interactiva y modular desarrollada para **Vexa**, una marca innovadora de ropa y artículos deportivos. El proyecto está construido utilizando un enfoque basado en componentes mediante **HTML5**, **CSS3 (Bootstrap)** y **JavaScript (ES6)** con carga asíncrona de contenido (`fetch`).

---

## 🎯 El Problema que Resuelve
Las tiendas de comercio electrónico y las marcas emergentes necesitan una presencia digital atractiva, rápida y modular que permita separar los componentes de la interfaz (como la barra de navegación, secciones de inicio, catálogo de precios, testimonios, sección "Sobre nosotros", contacto y pie de página) para facilitar su mantenimiento y escalabilidad. **Vexa** resuelve esta necesidad ofreciendo una página de aterrizaje dinámica que carga sus secciones de manera asíncrona y gestiona de forma interactiva un carrito de compras local.

---

## 👥 Contribución del Equipo (Lo que hizo cada quien)
El desarrollo del proyecto se organizó de manera modular mediante ramas de trabajo en Git:

* **Ariadna Vera:** Coordinación general del proyecto (Scrum Master), desarrollo del componente de pie de página (`Footer_Ari`), ajustes finales y control de versiones en el repositorio principal.
* **Maribel:** Desarrollo e implementación de la sección de contacto (`contacto/Maribel`).
* **Karen:** Creación y estructuración de la sección "Acerca de nosotros" (`karen-acercaDe`).
* **Iran:** Desarrollo del módulo de precios y planes de la tienda (`Iran-Precios`).
* **Yazmin:** Implementación de servicios y elementos interactivos adicionales.
* **Missael:** Configuración de la estructura base del sitio y navegación inicial.

---

## 🛠️ Tecnologías Usadas
* **HTML5:** Estructuración semántica de la página principal y los partials o plantillas modulares.
* **CSS3 & Bootstrap (v5):** Estilos personalizados y diseño responsivo adaptado para dispositivos móviles y de escritorio.
* **JavaScript (ES6):** * Uso de `async/await` y la API `fetch` para la carga dinámica de componentes HTML.
  * Manipulación del DOM y gestión de eventos.
  * Almacenamiento local (`localStorage`) para persistencia de datos en el carrito de compras.
* **Git & GitHub:** Control de versiones y colaboración del equipo.

---

## 🚀 Funcionalidades Principales
1. **Carga Asíncrona de Componentes (Partials):** El sitio web ensambla dinámicamente sus secciones principales (`#Navbar`, `#inicio`, `#acerca-de-nosotros`, `#precios`, `#servicios`, `#contacto`, `#footer`) haciendo peticiones asíncronas (`fetch`) a archivos HTML independientes.
2. **Sistema de Carrito de Compras Local:** Función `agregarCarrito` que almacena los productos seleccionados en el navegador mediante `localStorage` y actualiza dinámicamente el contador visual del carrito.
3. **Gestión de Carrusel Interactivo:** Configuración y control de elementos multimedia animados (GIFs) con soporte para Bootstrap Carousel y opciones de pausa/reproducción.
4. **Manejo Robusto de Errores:** Bloques `try...catch` integrados en las funciones de carga para capturar fallos de red o archivos no encontrados, mostrando alertas visuales amigables al usuario si un componente falla.

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente
Dado que el proyecto utiliza peticiones `fetch()` para cargar archivos HTML locales, se requiere un servidor local para evitar bloqueos de seguridad del navegador (*CORS policy*).

1. Clona el repositorio en tu computadora:
2. Abre la carpeta del proyecto en tu editor de código (por ejemplo, Visual Studio Code).
3. Instala y abre la extensión Live Server.
4. Haz clic derecho sobre el archivo index.html y selecciona "Open with Live Server". El proyecto se abrirá automáticamente en tu navegador predeterminado funcionando al 100%.

---

## 💡 Aprendizajes Clave
Arquitectura de Componentes en Vanilla JS: Comprendimos cómo simular un entorno de componentes reutilizables sin frameworks pesados, utilizando JavaScript plano y archivos HTML parciales mediante fetch.

Persistencia de Datos en el Cliente: Aprendimos a utilizar localStorage para que la información del carrito de compras no se pierda al recargar la página web.

Sincronización Asíncrona: Dominamos el manejo de funciones async/await y la verificación de estados de respuesta (response.ok) para asegurar una carga estable de la interfaz.

---

## 🔮 Mejoras Futuras
E-commerce Completo: Desarrollar una vista dedicada al carrito de compras para ver el detalle de los productos acumulados, calcular subtotales y simular un proceso de pago.

Optimización de Rutas: Migrar el proyecto a un empaquetador moderno o framework ligero (como Vite) para agilizar la gestión de archivos estáticos.

Filtros de Catálogo: Agregar filtros interactivos por categoría en la sección de productos o precios de la tienda deportiva.
