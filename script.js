let lastScrollTop = 0;
const yellowBackground = document.querySelector('.yellow-background');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rrotullimi poshtë
        yellowBackground.classList.add('hidden');
    } else {
        // Rrotullimi lart
        yellowBackground.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 50 ? 0 : scrollTop; // Për të shmangur numrat negative
});
