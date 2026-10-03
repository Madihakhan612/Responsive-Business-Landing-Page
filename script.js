document.documentElement.classList.add("js");

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/* Mobile navigation */
const navToggle = $("#navToggle");
const navLinks = $("#navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
  navToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

$$(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* Active navigation link */
const sections = $$("main section[id]");
const navAnchors = $$(".nav-links > a:not(.nav-order)");

function updateActiveLink() {
  const y = window.scrollY + 100;
  let current = "home";
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}
window.addEventListener("scroll", updateActiveLink, {passive:true});
updateActiveLink();

/* Hero video modal */
const videoModal = $("#videoModal");
const heroVideo = $("#heroVideo");

function openVideo() {
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  heroVideo.currentTime = 0;
  heroVideo.play().catch(() => {});
}
function closeVideo() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  heroVideo.pause();
}
$("#openVideo").addEventListener("click", openVideo);
$("#closeVideo").addEventListener("click", closeVideo);
$("#closeVideoBtn").addEventListener("click", closeVideo);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeVideo(); });

/* FAQ accordion */
$$(".faq-item > button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    $$(".faq-item").forEach(other => {
      if (other !== item) other.classList.remove("open");
    });
    item.classList.toggle("open");
  });
});

/* Testimonials */
const testimonials = $$(".testimonial");
const dots = $$("#sliderDots button");
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, i) => item.classList.toggle("active", i === testimonialIndex));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === testimonialIndex));
}
$("#prevTest").addEventListener("click", () => showTestimonial(testimonialIndex - 1));
$("#nextTest").addEventListener("click", () => showTestimonial(testimonialIndex + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => showTestimonial(i)));

let autoSlider = setInterval(() => showTestimonial(testimonialIndex + 1), 5000);
$(".testimonial-slider").addEventListener("mouseenter", () => clearInterval(autoSlider));
$(".testimonial-slider").addEventListener("mouseleave", () => {
  autoSlider = setInterval(() => showTestimonial(testimonialIndex + 1), 5000);
});

/* Contact form */
const toast = $("#toast");
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

$("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  $("#formMessage").textContent = "Thank you! Your message has been received.";
  e.target.reset();
  showToast("Message sent successfully ✓");
});

$("#subscribeForm").addEventListener("submit", e => {
  e.preventDefault();
  e.target.reset();
  showToast("You're subscribed to Brew & Bean ✓");
});

/* Add-to-order buttons */
$$(".menu-card button").forEach(button => {
  button.addEventListener("click", () => {
    const name = $("h3", button.closest(".menu-card")).textContent;
    showToast(`${name} added to your order ✓`);
  });
});

/* Reveal animations */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

$$(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 5, 4) * 60}ms`;
  observer.observe(el);
});

/* Back to top */
const backTop = $("#backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 450);
}, {passive:true});
backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

/* Current year */
$("#year").textContent = new Date().getFullYear();
