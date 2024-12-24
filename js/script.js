/* Scrolls to the top with navigation-arrow element */
const button = document.querySelector('.navigation-arrow');
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});