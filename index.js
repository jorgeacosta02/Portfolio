document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Objeto de datos a enviar al servidor Node.js
        const data = {
            name: name,
            email: email,
            message: message
        };

        // Enviar los datos al servidor Node.js
        fetch("/enviar-correo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Mensaje enviado correctamente");
                contactForm.reset();
            } else {
                alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
            }
        })
        .catch(error => {
            alert("Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.");
        });
    });
});
