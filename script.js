console.log("Regnare Stays site loaded!");

// Slideshow Script
let slides = document.querySelectorAll(".slideshow .slide");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });

  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 4000); // change every 4s


setInterval(showSlide, 4000); // Change every 4 seconds

// Scroll Animations
const fadeElements = document.querySelectorAll('.fade-in');

function checkVisibility() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
// Form Submission Popup
document.querySelectorAll(".booking-form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual submit (no backend yet)
    alert("✅ Thank you! Your request has been received. We’ll get back to you shortly.");
    form.reset(); // clear the form
  });
});
