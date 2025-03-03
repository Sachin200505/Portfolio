


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

// Typing Effect
var typingEffect = new Typed(".typedText", {
  strings: ["UI / UX Designer", "Full Stack Developer","Future Free Lancer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

sr.reveal('.featured-text-card, .featured-name, .featured-text-info, .featured-text-btn, .social_icons, .featured-image', { delay: 200 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({ origin: 'left', distance: '80px', duration: 2000, reset: true });
srLeft.reveal('.about-info, .contact-info', { delay: 100 });

const srRight = ScrollReveal({ origin: 'right', distance: '80px', duration: 2000, reset: true });
srRight.reveal('.skills-box, .form-control', { delay: 100 });

// Scroll Active Navigation
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

      let link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
      if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              link.classList.add('active-link');
          } else {
              link.classList.remove('active-link');
          }
      }
  });
}


//Emailjs Contact Form
emailjs.init('B2yQ0UEgz3EBR2Mox');

// EmailJS Contact Form
const contactForm = document.getElementById("contact-formm");
const btnnn = document.getElementById("send-btn");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  btnnn.value = "Sending...";
  console.log("Form submitted:", new FormData(contactForm)); // Debugging Log
  emailjs.sendForm("service_9rpnyas", "template_31b3xqi", this)
    .then(() => {
      btnnn.value = "Send";
      alert("Sent!");
    }, (err) => {
      btnnn.value = "Send";
      console.error("EmailJS Error:", err);
      alert("Error sending email. Check console for details.");
    });
});
