export const THEME_SWITCHER = {};

THEME_SWITCHER.init = function () {
    const $root = document.querySelector('html');
    const $themeSwitcher = document.querySelector('.header__theme-btn');

    let systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
    let themeState = sessionStorage.getItem('theme');

    const changeMode = function (isDarkModeActivate) {
        if (isDarkModeActivate) {
            $root.classList.add('dark');
            $root.classList.remove('light');
            sessionStorage.setItem('theme', 'dark');
        } else {
            $root.classList.add('light');
            $root.classList.remove('dark');
            sessionStorage.setItem('theme', 'light');
        }
    }

    if (themeState !== 'undefined' && themeState !== null) {
        changeMode(themeState === 'dark');
    } else {
        changeMode(systemInitiatedDark.matches);
    }

    if ($themeSwitcher) {
        $themeSwitcher.addEventListener('click', function () {
            changeMode(!$root.classList.contains('dark'));
        })
    }
};