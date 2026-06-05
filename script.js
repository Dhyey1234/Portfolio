'use strict';

const NAV = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  NAV && NAV.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up').forEach((el) => revealIO.observe(el));

const navLinks = document.querySelectorAll('.nav-link');
const sectionIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((a) => a.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('section[id]').forEach((section) => sectionIO.observe(section));

const roles = [
  'Full Stack Developer',
  'Software Developer',
  'Mobile Application Developer',
  'Web Application Developer',
  'Cloud Enthusiast',
];

const roleText = document.getElementById('roleText');
let roleIdx = 0;

function rotateRole() {
  if (!roleText) return;
  roleIdx = (roleIdx + 1) % roles.length;
  roleText.classList.add('exiting');
  setTimeout(() => {
    roleText.textContent = roles[roleIdx];
    roleText.classList.remove('exiting');
    roleText.classList.add('entering');
    void roleText.offsetWidth;
    roleText.classList.remove('entering');
  }, 320);
}

if (roleText) {
  roleText.textContent = roles[0];
  setInterval(rotateRole, 2000);
}
