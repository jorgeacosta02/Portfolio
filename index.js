// console.log("index.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    // console.log("entrando a la función");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // console.log("Form submitted");

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Objeto de datos a enviar al servidor Node.js
        const data = {
            name: name,
            email: email,
            message: message
        };

        // console.log('data: ',data);
        // Enviar los datos al servidor Node.js
        fetch("http://127.0.0.1:3000/send-correo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(console.log('then after fetch'))
        .then(response => response.json()) // Parsea la respuesta como JSON
        .then(data => {
            if (data.success) {
                alert("Message sent successfully");
                contactForm.reset();
            } else {
                // console.log('inside fetch'),
                alert("Error sending message. Please, try it again later.");
            }
        })
        // .then(console.log('just before catch'));
        .catch(error => {
            // console.log('inside fetch catch');
            alert("There was an error in the request. Please, try it again later.");
            console.log(error);
        });
    });
});



// Show menu in mobile

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


