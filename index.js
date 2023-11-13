console.log("index.js loaded");

const port = 3000


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const data = {
            name: name,
            email: email,
            message: message
        };

        fetch('https://jorgeacostaportfolio.netlify.app/send-email', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(console.log('then after fetch'))
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully");
                contactForm.reset();
            } else {
                alert("Error sending message. Please, try it again later.");
            }
        })
        .catch(error => {
            alert("There was an error in the request. Please, try it again later. "+ error.message);

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


