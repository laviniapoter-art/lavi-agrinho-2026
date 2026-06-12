// Rolagem suave dos links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao aparecer na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.card, .comedouro, .info').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Efeito no cabeçalho ao rolar
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.background = '#1b5e20';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    } else {
        header.style.background = '#2e7d32';
        header.style.boxShadow = 'none';
    }

});

// Botão de orçamento
const btnOrcamento = document.querySelector('.info .btn');

if (btnOrcamento) {
    btnOrcamento.addEventListener('click', (e) => {
        e.preventDefault();

        alert(
            'Obrigado pelo interesse! Em breve nossa equipe entrará em contato.'
        );
    });
}
