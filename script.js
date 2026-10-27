// Очікуємо завантаження всього DOM-дерева
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const aboutSection = document.getElementById('about');

    // Обробка кліку на кнопку "Дізнатися більше"
    if (learnMoreBtn && aboutSection) {
        learnMoreBtn.addEventListener('click', () => {
            // Плавно прокручуємо сторінку до розділу "Про програмування"
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});