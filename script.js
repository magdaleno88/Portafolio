const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const menuLabel = menuButton.querySelector('.sr-only');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuLabel.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Abrir menú';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
