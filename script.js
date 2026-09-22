const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const menuLabel = menuButton.querySelector('.sr-only');

function updateMenuLabel() {
  const open = navigation.classList.contains('open');
  menuLabel.textContent = document.documentElement.lang === 'en'
    ? (open ? 'Close menu' : 'Open menu')
    : (open ? 'Cerrar menú' : 'Abrir menú');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  updateMenuLabel();
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
    menuButton.focus();
  }
});
