// Función para resetear el formulario
function resetForm() {
    // Resetear los valores de los campos después de enviar el formulario
    document.getElementById("contactForm").reset();
}

// Event listener para el envío del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Prevenir el comportamiento predeterminado del formulario (evitar que se recargue la página)
    event.preventDefault();

    // Realizar la lógica de envío del formulario a través de Formspree
    const form = document.getElementById("contactForm");
    const url = "https://formspree.io/f/mbjveazj";  // Reemplaza con tu URL de Formspree

    fetch(url, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Aquí puedes manejar la respuesta de Formspree si es necesario
        console.log(data);
        
        // Luego de enviar el formulario, llamar a la función resetForm para limpiar los campos
        resetForm();
    })
    .catch(error => {
        // Manejar errores en caso de que falle la solicitud
        console.error("Error:", error);
    });
});


// Resto del código para mostrar/ocultar el menú en dispositivos móviles
const toggleButton = document.querySelector(".toggleButton");
const navlist = document.querySelector(".navlist");
const homeBut = document.querySelector(".home-but");
const aboutBut = document.querySelector(".about-but");
const skillsBut = document.querySelector(".skills-but");
const projectsBut = document.querySelector(".projects-but");
const bgBut = document.querySelector(".bg-but");
const contactBut = document.querySelector(".contact-but");

toggleButton.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

homeBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

aboutBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

skillsBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

projectsBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

bgBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});

contactBut.addEventListener("click", () => {
    navlist.classList.toggle("navlist_visible");
});
