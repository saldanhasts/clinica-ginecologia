//Animação no load do site

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


// animação no scroll
const elements = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});

elements.forEach(el=>observer.observe(el));

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// Incontinência Urinária


document.addEventListener("DOMContentLoaded", function () {

  const sectionPDO = document.querySelector(".pdo-section");

  if (!sectionPDO) return;

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  }, {
    threshold: 0.2
  });

  observer.observe(sectionPDO);

});

// Área de Atuação

const premiumItems = document.querySelectorAll('.premium-item');

const premiumObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

premiumItems.forEach(item => premiumObserver.observe(item));


// Procedimentos

const signatureItems = document.querySelectorAll('.signature-item');

const signatureObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

signatureItems.forEach(item => signatureObserver.observe(item));


// CONHEÇA NOSSO CONSULTÓRIO

const slides = document.querySelectorAll(".clinic-fade img");

let index = 0;

setInterval(() => {

  slides[index].classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");

}, 3800);


// CTA

const appointmentCard = document.querySelector('.appointment-card');

const appointmentObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        appointmentCard.classList.add('visible');
      }
    });
  },
  { threshold: 0.25 }
);

appointmentObserver.observe(appointmentCard);

// Animação título ABOUT

const typedText = document.getElementById("typed-text");

const titles = [
  "Uma medicina feita com respeito",
  "Cuidado e parceria com os pacientes"
];

const titleElement = document.getElementById("animated-title");
let titleIndex = 0;
let charIndex = 0;
let typingSpeed = 80;   // velocidade de digitação
let deletingSpeed = 50; // velocidade de apagar
let pauseTime = 2000;   // pausa após digitar

function type() {
  const currentTitle = titles[titleIndex];
  if (charIndex < currentTitle.length) {
    typedText.textContent += currentTitle.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, pauseTime);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = typedText.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, deletingSpeed);
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, typingSpeed);
  }
}

// inicia animação após carregar a página
document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Voltar ao topo

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 3.9) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// MENU HAMBURGUER
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('menu-overlay');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });