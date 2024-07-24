

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const sidebar = body.querySelector('nav');
    const toggle = body.querySelector('.toggle');
    const searchBtn = body.querySelector('.search-box');
    const modeSwitch = body.querySelector('.toggle-switch');
    const modeText = body.querySelector('.mode-text');

    // Verificar si los elementos existen antes de añadir eventos
    if (toggle) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('close');
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            sidebar.classList.add('close');
        });
    }

    if (modeSwitch && modeText) {
        modeSwitch.addEventListener('click', () => {
            body.classList.toggle('dark');
            modeText.innerText = body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
        });
    }
});
