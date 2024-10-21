const nav = document.querySelector('nav');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const pagina1 = document.getElementById('pagina1');
const pagina2 = document.getElementById('pagina2');
const pagina3 = document.getElementById('pagina3');

function handleButtonClick(button, page) {
  window.history.pushState({ page: button.dataset.page }, `Página ${button.dataset.page}`, `#${page.id}`);
  page.scrollIntoView({ behavior: 'smooth' });
  nav.classList.add('nav-moving');
  setTimeout(() => {
    nav.classList.remove('nav-moving');
  }, 1000);
}

botao1.addEventListener('click', () => {
  handleButtonClick(botao1, pagina1);
});

botao2.addEventListener('click', () => {
  handleButtonClick(botao2, pagina2);
});

botao3.addEventListener('click', () => {
  handleButtonClick(botao3, pagina3);
});



