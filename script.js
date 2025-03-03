// Initialize EmailJS
emailjs.init('B2yQ0UEgz3EBR2Mox');

// Toggle Navigation Menu
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.classList.contains("responsive")) {
      menuBtn.classList.remove("responsive");
  } else {
      menuBtn.classList.add("responsive");
  }
}

// Header Shadow on Scroll
window.onscroll = function() { headerShadow(); };

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
  } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
  }
}

// EmailJS Contact Form


const contactForm = document.getElementById("contact-formm");
const btnnn = document.getElementById("send-btn");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted:", new FormData(contactForm));

  btnnn.value = "Sending...";
  emailjs.sendForm("service_9rpnyas", "template_31b3xqi", this)
    .then(() => {
      btnnn.value = "Send";
      alert("Sent!");
    }, (err) => {
      btnnn.value = "Send";
      alert(JSON.stringify(err));
    });
});

