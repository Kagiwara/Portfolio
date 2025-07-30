document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const isOpen = details.classList.contains('open');
        
        // Закрываем все открытые блоки
        document.querySelectorAll('.project-details.open').forEach(detail => {
            detail.classList.remove('open');
        });
        
        // Открываем текущий, если он был закрыт
        if (!isOpen) {
            details.classList.add('open');
        }
    });
});