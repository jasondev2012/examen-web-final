const body = document.body;
const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-actions');
const themeButton = document.querySelector('.theme-toggle');
const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

// Conserva la preferencia de tema de la visita actual en el navegador.
function applyTheme(isDark) {
  body.classList.toggle('dark', isDark);
  themeButton.querySelector('span').textContent = isDark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

applyTheme(localStorage.getItem('theme') === 'dark');
themeButton.addEventListener('click', () => {
  const isDark = !body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme(isDark);
});

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  status.textContent = '¡Gracias! Te responderemos muy pronto.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
