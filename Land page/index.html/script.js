// Toast premium com animação de bounce
window.addEventListener('load', () => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = `
    <span>Seja bem-vindo!</span>
    <button class="close-toast">&times;</button>
  `;
  document.body.appendChild(toast);

  // Mostrar toast com delay curto para animação
  setTimeout(() => toast.classList.add('show'), 100);

  // Função para esconder toast
  const hideToast = () => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 600); // espera a animação terminar
  };

  // Desaparecer automaticamente após 5 segundos
  setTimeout(hideToast, 5000);

  // Fechar ao clicar no botão
  toast.querySelector('.close-toast').addEventListener('click', hideToast);
});


cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
    card.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  });
});

const navLinks = document.querySelectorAll('.navbar .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.style.backgroundColor = '#0a1d3c'; // azul mais escuro
  } else {
    header.style.backgroundColor = '#0b2347'; // azul marinho original
  }
});
// ==============================
// Accordion Scroll & Animated Icon
// ==============================
const accordions = document.querySelectorAll('.accordion-button');

accordions.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle icon + / −
    const expanded = button.classList.contains('collapsed');
    button.innerHTML = expanded 
      ? button.innerHTML.replace('+', '−') 
      : button.innerHTML.replace('−', '+');

    // Scroll suave até o item aberto
    setTimeout(() => {
      if(!button.classList.contains('collapsed')){
        button.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  });
});

const sobreSection = document.getElementById('sobre');
window.addEventListener('scroll', () => {
  const top = sobreSection.getBoundingClientRect().top;
  const height = window.innerHeight;
  if(top < height - 100){
    sobreSection.classList.add('visible');
  }
});
