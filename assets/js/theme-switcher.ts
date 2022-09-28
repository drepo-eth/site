import {STATE} from './state';

export const THEME_SWITCHER = {};

THEME_SWITCHER.init = function () {
    const $root = document.querySelector('html');
    const $themeSwitcher = document.querySelector('.header__theme-btn');

    let systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
    let themeState = sessionStorage.getItem('theme');

    let changeMode = function (isDarkModeActivate) {
        STATE.toggleTransition(true);

        if (isDarkModeActivate) {
            $root.classList.add('dark');
            $root.classList.remove('light');
            sessionStorage.setItem('theme', 'dark');
        } else {
            $root.classList.add('light');
            $root.classList.remove('dark');
            sessionStorage.setItem('theme', 'light');
        }

        STATE.toggleTransition(false);
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