// Можно добавить функциональность, например:
document.addEventListener('DOMContentLoaded', function() {
    // 1. Подсветка активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Динамическая загрузка PDF (если нужно)
    // Можно использовать PDF.js для кастомного просмотра
    // https://mozilla.github.io/pdf.js/
});

// 3. Пример: кнопка "Наверх"
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑ Наверх';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '60px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.background = '#3498db';
scrollToTopBtn.style.color = 'white';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
