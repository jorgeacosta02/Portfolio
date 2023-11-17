const form =  document.getElementById("contactForm");

function resetForm() {
    form.reset();
};

form.addEventListener("submit", function (event) {

    event.preventDefault();
    const url = "https://formspree.io/f/mbjveazj"; 

    fetch(url, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        resetForm();
        alert('Message sent successfully!!');
    })
    .catch(error => {
        alert('Error sending message. Please, try it again later.');
        console.error("Error:", error);
    });
});


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
