// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }, 80);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars when skills section appears
      if (entry.target.id === 'skills') {
        document.querySelectorAll('.bar-fill').forEach((bar) => {
          bar.style.width = bar.dataset.width + '%';
        });
      }
    }
  });
}, { threshold: 0.1 });

sections.forEach((s) => observer.observe(s));

// ===== TYPEWRITER =====
const titles = [
  'Frontend Developer',
  'Problem Solver',
  'CS Student',
  'Open to Work'
];

let titleIndex = 0, charIndex = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = titles[titleIndex];
  if (!deleting) {
    typeEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }
  setTimeout(type, deleting ? 55 : 110);
}
type();

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});