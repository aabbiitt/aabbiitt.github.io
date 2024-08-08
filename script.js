// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon img');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeBtn = document.querySelector('.close-btn');

    searchIcon.addEventListener('click', () => {
        searchOverlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'none';
    });
});
