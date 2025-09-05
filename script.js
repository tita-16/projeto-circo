<!--livia pellegrini lima 2E 27.08.25
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');
  const aumentar = document.getElementById('aumentar-fonte');
  const diminuir = document.getElementById('diminuir-fonte');
  const contraste = document.getElementById('alterna-contraste');

  let fontSize = 1;

  // Toggle acessibilidade
  botao.addEventListener('click', () => {
    botao.classList.toggle('rotacao-botao');
    opcoes.classList.toggle('apresenta-lista');
    const expanded = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', !expanded);
  });

  // Aumentar fonte
  aumentar.addEventListener('click', () => {
    fontSize = Math.min(fontSize + 0.1, 2); // limite até 2rem
    document.body.style.fontSize = `${fontSize}rem`;
  });

  // Diminuir fonte
  diminuir.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 0.1, 0.8); // limite até 0.8rem
    document.body.style.fontSize = `${fontSize}rem`;
  });

  // Alternar contraste
  contraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });

  // ScrollReveal
  if (window.ScrollReveal) {
    ScrollReveal().reveal('#inicio', { delay: 300, distance: '40px', origin: 'bottom' });
    ScrollReveal().reveal('#circo-dos-bonecos', { delay: 400, distance: '40px', origin: 'left' });
    ScrollReveal().reveal('#galeria', { delay: 500, distance: '40px', origin: 'right' });
  }
});
