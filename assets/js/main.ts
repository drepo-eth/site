import {MENU} from './menu';
import {THEME_SWITCHER} from './theme-switcher';

window.addEventListener('load', function () {
    MENU.init();
    THEME_SWITCHER.init();
});