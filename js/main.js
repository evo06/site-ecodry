// Menu mobile toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav--open');
    });
  }

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('nav--open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Header com sombra ao rolar
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 10) header.classList.add('header--scrolled');
    else header.classList.remove('header--scrolled');
  });

  // Fade-in ao rolar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.servico-row, .depoimento, .faq-item').forEach(el => observer.observe(el));
});
