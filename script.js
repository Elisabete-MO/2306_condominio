// udar cor de fundo do header quando o scrool for acionado
const header = document.querySelector('.site-header');
const thumbnails = document.querySelectorAll('.thumbnail');
const overlays = document.querySelectorAll('.overlay');
const scrollLinks = document.querySelectorAll('.scroll-link');


window.addEventListener('scroll', function() {
  const scrolled = window.scrollY > 0; // Verifica se o scroll vertical ocorreu

  if (scrolled) {
    header.style.backgroundImage = 'linear-gradient(45deg, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .6) 100%)';
  } else {
    header.style.backgroundImage = ''; // Reverte para a cor de fundo padrão quando o scroll é resetado
  }
});

thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function() {
    overlays[index].style.display = 'flex';
  });
});

overlays.forEach(function(overlay, index) {
  overlay.addEventListener('click', function() {
    overlays[index].style.display = 'none';
  });
});

scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetId = link.getAttribute('href'); // Obtém o ID do alvo do link
    const targetElement = document.querySelector(targetId); // Obtém o elemento alvo
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Rola a página até o elemento alvo de forma suave
  });
});